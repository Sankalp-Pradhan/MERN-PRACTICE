const express = require("express");
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdfg@123"


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

        });
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

app.post("/todo", function (req, res) {

})

app.get("/todos", function (req, res) {

})
x
app.listen(3000);