import express from 'express';
import signUpTemplate from '../models/SignUpModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const signedUpUser = new signUpTemplate({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: securePassword,
    })
    signedUpUser.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        signUpTemplate.findOne({ email }).then( async function (data) {
            const existingUser = data;

            if (!existingUser) return res.status(404).json({ message: "User doesn't exists" });

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Password" });

            const token = jwt.sign({
                email: existingUser.email,
                id: existingUser._id
            }, 'test', { expiresIn: "1h" });

            res.status(200).json({ result: existingUser, token });
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
});

router.post('/update', async (req, res) => {

    try {
        signUpTemplate.updateOne({ email:  req.body.email }, { $set: { ToDos: req.body.ToDos, Clock: req.body.Clock, Fitness: req.body.Fitness, Goals: req.body.Goals, firstTime: false } })
        .then( async function (err, data) {
            var existingUser = data;
            signUpTemplate.findOne({ email:  req.body.email })
            .then(async function (data) {
                existingUser = data;

                res.status(200).json({ result: existingUser });
            })
        })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
});

export default router;