const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new mongoose.Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

const model = mongoose.model('accounts', Account);
module.exports = model;