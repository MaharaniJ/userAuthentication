const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Register= require('./model')
const Jwt = require('jsonwebtoken')
const middleware = require('./middleware')
const cors = require('cors')
app.use(express.json())
app.use(cors({origin:'http://localhost:3000'}))
mongoose.connect('mongodb+srv://jeyamaha98:jeyamaha@cluster0.r9yfyga.mongodb.net/userauthenticate', 
{
useNewUrlParser: true, 
useUnifiedTopology: true,
 })
.then(()=>{
    console.log('DB is connected')
})

app.get('/', (req, res) => {
    res.send('hello world')
})

 app.post('/register',async (req,res)=>{
try{
const {username,email,password,confirmpassword} = req.body;
const exist = await Register.findOne({email:email})
if(exist){
    return res.status(400).json({message:'email already exist'})
}
if(password !== confirmpassword){
    return res.status(400).json({message:'password not match'})
}
let newuser = new Register({
    username,
        email,
        password,
        confirmpassword
})
await newuser.save()
res.status(200).send({message:"user registered successfully"})
}
catch(err){
    console.log(err)
    return res.status(400).json({message:"Internal Server Error"})
}
})

app.post('/login',async (req, res) => {
   try{
    const {email,password} = req.body;
    let exist = await Register.findOne({email})
    if(!exist){
return res.status(404).json({message:"User not found"})
    } 
    if(exist.password !== password){
        return res.status(400).json({message:"email/password not match"})
    }

    let payload = {
        user:{
            id:exist.id,
            }
    }
    Jwt.sign(payload,'jwtsecretkey',{expiresIn:4500000},
        (err,token)=>{
            if(err) throw err;
            return res.status(200).json({token})
        })
}
   catch(err){
          console.log(err)
          return res.status(500).json({message:"Internal Server Error"})
      }

})

app.get('/userprofile',middleware,async(req, res)=>{
    try{
let exist = await Register.findById(req.user.id);
if(!exist) {
    return res.status(400).json({message:"User not found"})
}res.json(exist)
    }
    catch(err){
            console.log(err)
            return res.status(500).json({message:"Internal Server Error"})
        }
})
app.listen(5000,()=>{
    console.log('server is running')
})