import mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017');

import {userModel} from './user';


export var db ={
    userModel
}