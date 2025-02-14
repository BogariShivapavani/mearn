const express = require('express') //import express
const app= express() //creating instance for express
const mongoose=require('mongoose')
const user = require('./schema')
const path = require('path')
const passport=require('passport')


mongoose.connect('mongodb://127.0.0.1:27017/CSE3')  // way to connect to MongoDB
  .then(()=>{console.log('MongoDB connected')})
  .catch((err)=>console.log('Mongo connection error',err));

app.use(express.urlencoded({extended:true}))

passport.use(session({
    serect : 'your_serect_key',
    resave : false,
    saveUninitialized : false

}));

initializePassport(passport)
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.get('/',(req,res)=>{
    return res.sendFile(__dirname+'/public/index.html')
})
app.get('/about',(req,res)=>{
    res.send("This is about me")
})
app.get('/services',(req,res)=>{
    console.log('requested')
    res.send("This is about services")
})

app.post('/input',(req,res)=>{
    const Newuser = new user({
        Firstname : req.body.Firstname,
        Lastname : req.body.Lastname,
        password : req.body.password,
        Email : req.body.Email
    })
    Newuser.save()
    .then(()=>{res.send('user saved successfully')})
    .catch(err=>res.status(500))
})
app.listen(5500,()=>{
    console.log('http://localhost:5500')
})