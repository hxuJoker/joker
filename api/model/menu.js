const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/menu')

let menuSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true
  },
  children:{
    type:Array,
    default:[]
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

module.exports = mongoose.model('Menu',menuSchema)