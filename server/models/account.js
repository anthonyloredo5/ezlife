const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new mongoose.Schema({
    username: String,
    password: String,
    fullName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
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
    Water: {
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

Account.plugin(passportLocalMongoose);

const model = mongoose.model('accounts', Account);
module.exports = model;