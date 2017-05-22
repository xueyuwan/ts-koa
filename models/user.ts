import mongoose = require('mongoose');

var userSchema =new mongoose.Schema({
    name:String,
    age:Number
});
 interface IUser extends mongoose.Document{
 name:string;
 age:string;
}

export var userModel =mongoose.model<IUser>('User',userSchema)



