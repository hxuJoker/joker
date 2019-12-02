const express = require('express')
const md5 = require('blueimp-md5')
const User = require('../model/user')
const router = express.Router()

router.post('/api/login' ,async (req,res)=>{
  let body = req.body
  try {
    const ret = await User.findOne({username:body.username,password:md5(md5(body.password))})
    if(!ret){
      return res.status(200).json({
        err_code:1,
        message:'用户名或密码错误'
      })
    }
    req.session.user = ret
    res.status(200).json({
      err_code:0,
      message:'登录成功',
      userInfo:req.session.user
    })
  } catch (error) {
    res.status(500).json({
      err_code:500,
      message:error.message
    })
  }
})

router.post('/api/register',async (req,res)=>{
  let body = req.body
  try {
    const ret = await User.findOne({username:body.username})
    if(ret){
      return res.status(200).json({
        err_code: 1,
        message:'用户名重复'
      })
    }
    body.password = md5(md5(body.password))
    await new User(body).save().then(user=>{
      req.session.user = user
      res.status(200).json({
        err_code:0,
        message:'注册成功',
        userInfo:req.session.user
      })
    })
  } catch (error) {
    res.status(500).json({
      err_code:500,
      message:error.message
    })
  }
})

router.get('/api/logout' ,async (req,res)=>{
  req.session.user = null
  res.status(200).json({
    err_code:0,
    message:'退出成功',
    url:'/login'
  })
})

router.get('/api/userInfo' ,async (req,res)=>{
  res.status(200).json({
    err_code:0,
    userInfo:req.session.user
  })
})
module.exports = router