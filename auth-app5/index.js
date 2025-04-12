const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = 'something/123'

const app = express();
app.use(express.json());

const users = []

function logger(req,res,next){
    console.log(req.method + "request came");
    next();
}

app.post("/signup",logger,function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password,
    })

    res.json({
        message: "you are signed in",
    })
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "./publc/index.html")
})
app.post("/signin",logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i]
        }
    }
     
    if(!foundUser){
        res.json({
            message: "credential incorrect"
        })
        return
    }else{
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token : token 
        })
    }


})

function auth(req,res,next){
   const token = req.headers.token;
   const decodeData = jwt.verify(token , JWT_SECRET)
   if(decodeData.username){
    req.username = decodeData.username;
    next()
   }else{
    res.json({
        message : 'you are logged in'
    })
   }
 
}



app.get("/me",logger, auth,function (req, res) {
    const token =  req.headers.tokemn;

    // const decodeData = jwt.decode(token);
    const decodeData = jwt.verify(token , JWT_SECRET);

    if(decodeData.username){
        let foundUser = null;
       
        for(let i = 0;i<users.length;i++){
            if(users[i].username===req.username){
                foundUser = users[i]
            }
        }
    }
    res.json({
        username : foundUser.username,
        password : foundUser.password
    })
    
})

app.get("/todos", logger,auth,function(req,res){
    
})

app.post("/todos",logger,auth,function(req,res){

})

app.delete("/todos",logger,auth,function(req,res){

})

app.listen(3000)