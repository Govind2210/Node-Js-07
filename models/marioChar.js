const mongoose = require('mongoose');

//  Your code goes here

const marioSchema = new mongoose.Schema({ // database 
    name : {type : String , required : true},
    weight : {type : Number , required : true}
})

const marioModel = mongoose.model("Mario" , marioSchema) // collection  and my schema
// collection 

//mongodb --> dataabase -- > collection --> data --> filed : value 

module.exports = marioModel // export 