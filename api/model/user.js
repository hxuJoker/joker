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
  },
  gender:{
    type:Number,
    enum:[0,1],
    default:0
  },
  birthday:{
    type:String,
    default:''
  },
  hobbies:{
    type:Array,
    default:[]
  },
  email:{
    type:String,
    default:''
  },
  city:{
    type:String,
    default:''
  },
  create_time:{
    type:Date,
    default:Date.now
  },
  update_time:{
    type:Date,
    default:Date.now
  },
})

module.exports = mongoose.model('User',loginSchema)