import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/routes.js'
import routes from './routes/index.js';
/* === Dependencies === */
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import passportLocal from 'passport-local';
import LocalStrategy from passportLocal.Strategy();
import flash from 'connect-flash';


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();

/* === Middleware === */
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());
//app.use(express.static(__dirname + '/client/build'));

//middle for mongoose
app.use(bodyParser.json({ limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());


/* === Server-Side Authentication w/passport.js on our Model === */
const Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


//app.use('/api', userRoutes);
app.use(routes);
//middle for posts
//adds "posts" to all post routes coming into this file
//app.use('/posts', postRoutes);

// app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );

const PORT = process.env.PORT || 5000;

//db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);