import mongoose from 'mongoose';

const signUpTemplate = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    todo: {
        type: Boolean,
        default: false,
    },
    firstTime: {
        type: Boolean
    }
})

const model = mongoose.model('myTable', signUpTemplate);

export default model;