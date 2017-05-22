"use strict";
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');
const user_1 = require('./user');
exports.db = {
    userModel: user_1.userModel
};
