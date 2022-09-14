const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/" , (req ,res)=>{
    res.send("ok")
})

// data-base create 

app.get("/mario" , async (req ,res)=>{
    try{
        const marios = await marioModel.create({
            name : req.body.name ,
            weight : req.body.weight , 
        })
        res.json({
            status : 200 ,
            marios
        })
    }
    catch(e){
        res.json({
            status : 400,
            message : e.message
        })
}})

//search data from id 

app.get("/mario/:id" , async (req ,res)=>{
    try{
        const _id = req.params.id
        const marios = await marioModel.find({_id : _id})
        res.json({
            status : 200,
            marios
        })
    }
    catch(e){
        res.json({
            status : 404,
            message : e.message
        })
}})

// create collection 

app.post("/mario" , async (req ,res)=>{
    try{
        const data = req.body
        const marios = await marioModel.create(data)
        res.json({
            status : 201,
            marios
        })
    }
    catch(e){
        res.json({
            status : 400,
            message : e.message
        })
}})

// to update the data base 

app.patch("/mario/:id" , async (req ,res)=>{
    try{
        const data = req.body
        const marios = await marioModel.findOneAndUpdate(req.params.id , req.body)
        res.json({
            status : 200,
            marios
        })
    }
    catch(e){
        res.json({
            status : 400,
            message : e.message
        })
}})

// delete the data base :-

app.delete("/mario/:id" , async (req ,res)=>{
    try{
        const data = req.body
        const marios = await marioModel.findByIdAndDelete(req.params.id)
        res.json({
            status : 200,
            message: 'character deleted'
        })
    }
    catch(e){
        res.json({
            status : 400,
            message : e.message
        })
}})



module.exports = app;