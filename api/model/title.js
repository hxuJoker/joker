const mongoose = require('mongoose')

mongoose.connect('mongoose://localhost/title')

let titleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  create_time:{
    type:Date,
    default:Date.now
  },
  update_time:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('Title',titleSchema)