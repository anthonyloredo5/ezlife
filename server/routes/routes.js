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
        const existingUser = signUpTemplate.findOne({ email });
        console.log(existingUser);
        if (!existingUser) return res.status(404).json({ message: "User doesn't exists" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Password" });

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id
        }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong."});
    }

});

export default router;