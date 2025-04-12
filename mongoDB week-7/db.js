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

const UserModel  = mongoose.model('users',User);
const todoModel  = mongoose.model('todos',User);

module.exports = {
    UserModel : UserModel,
    todoModel : todoModel 
}