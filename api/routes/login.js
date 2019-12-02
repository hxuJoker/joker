const express = require('express')

const router = express.Router()

const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  }
}
router.post('/api/login' ,(req,res)=>{
  req = req.body
  res.json({
    error:0,
    message:'注册成功',
    token: USER_MAP[req.userName].token
  })
})

router.post('/api/register' ,(req,res)=>{
  req = req.body
  res.json({
    error:0,
    message:'注册成功',
    token: 'sfsdf'
  })
})

router.get('/api/logout' ,(req,res)=>{
  res.json({
    error:0,
    message:'注册成功',
  })
})

module.exports = router