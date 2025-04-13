const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = new Schema({
    email : {type : String , unique : true},
    password : String,
    name : String ,
})

const Todo = new Schema({
    tittle : String,
    done : Boolean ,
    userId : ObjectId
    
})

const UserModel  = mongoose.model('users',user);
const todoModel  = mongoose.model('todos',user);

module.exports = {
    UserModel : UserModel,
    todoModel : todoModel 
}