const bcrypt = require("bcrypt")
const express = require("express");
const { UserModel, TodoModel } = require("./db")
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "asdfg@123"
const {z} = require("zod");


mongoose.connect("mongodb+srv://sankalppradhan1906:aaBoV246fqBYgIfX@cluster0.ked4nml.mongodb.net/sankap-todo12")
const app = express()
app.use(express.json());

app.post("/signup", async function (req, res) {
    const requireBody = z.object({
        email : z.string().min(3).max(100).email(),
        password : z.string().min(3).max(100),
        name : z.string().min(3).max(100)
    })
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message : "incoreect format",
            error : parsedDataWithSuccess.error

        })
        return
    }

    const email = req.body.email;
    const password = req.body.password ;
    const name = req.body.name ;

        if(typeof email !== (String && Number)  || email.length<5 || !email.includes("@")){
            res.json({
                message : "email incorrect"
            })
            return
        }
        // let errorThrown = false ;
        // try {
        const hashedPassword = await bcrypt.hash(password, 5 );
        console.log(hashedPassword);
        
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })

    // // } catch (e) {
    //     res.json({
    //         message : "User already exists"
    //     })
    //     errorThrown = false;    
    // }
    //   if (!errorThrown){ 
         res.json({
        message: "you are logged in"
    })
// }
})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password; 

    const user = await UserModel.findOne({
        email : email,
    })

    if(!user){
        res.status(403).json({
            message : "User do esnot exist"
        })
        return
    }
     
   const passwordMatch = await bcrypt.compare(password , user.password);

    if(passwordMatch){
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