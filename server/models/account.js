const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new mongoose.Schema({
    username: String,
    password: String,
    
});

Account.plugin(passportLocalMongoose, {
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
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
});

const model = mongoose.model('accounts', Account);
module.exports = model;