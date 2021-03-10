const mongoose = require("mongoose"); 

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
    firstTime: {
        type: Boolean,
        default: true
    },
    ToDos: {
        type: Boolean,
        default: false,
    },
    Clock: {
        type: Boolean,
        default: false,
    },
    Fitness: {
        type: Boolean,
        default: false,
    },
    Goals: {
        type: Boolean,
        default: false,
    },
})

const model = mongoose.model('myTable', signUpTemplate);

module.exports = model;