"use strict";
const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: String,
    age: Number
});
exports.userModel = mongoose.model('User', userSchema);
