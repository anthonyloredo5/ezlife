import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/users.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

//import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//app.use(express.static(__dirname + '/client/build'));
app.use('/users', userRoutes);

//middle for mongoose
app.use(bodyParser.json({ limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());

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