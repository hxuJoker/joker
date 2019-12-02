const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

let loginSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

module.exports = mongoose.module('User',loginSchema)