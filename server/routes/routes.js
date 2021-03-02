import express from 'express';
import signUpTemplate from '../models/SignUpModels.js';

const router = express.Router();

router.post('/signup', (req, res) => {
    const signedUpUser = new signUpTemplate({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    })
    signedUpUser.save()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
});

export default router;