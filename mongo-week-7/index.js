const express = require("express");
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "asdfg@123"

mongoose.connect("mongodb+srv://sankalppradhan1906:5Pm5kRpSYeKOqjJF@cluster0.ked4nml.mongodb.net/sankap-todo111")
const app = express()
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password ;
    const name = req.body.name ;

    
    await UserModel.create({
        email: email,
        password: password,
        name: name
    })
    res.json({
        message: "you are logged in"
    })
})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password 

    const user = await UserModel.findOne({
        email : email,
        password : password 
    })
     console.log(user);

    if(user){
        const token = jwt.sign({
            id : user._id,

        }, JWT_SECRET);
        res.json({
            token : token
        });
    }
    else{
        res.status(404).json({
            message : "Incorrect Credentials"
        })
    }
})

app.post("/todo", auth ,function (req, res) {
    const user = req.body.user;
    const title = req.body.title
})

app.get("/todos",auth ,async  function (req, res) {
     const user = await user.findOne({
        name : name,
        tittle : tittle
     })
})

function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData){
        req.userId = decodedData.userId;
        next();
    }

}

app.listen(3000);