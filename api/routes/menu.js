const express = require('express')
const Menu = require('../model/menu')
const router = express.Router()

router.get('/api/menu' ,async (req,res)=>{
  try {
    let ret = await Menu.find()
    res.status(200).json({
      err_code:0,
      message:'',
      menuList:ret
    })
  } catch (error) {
    res.status(500).json({
      err_code:500,
      message:error.message
    })
  }
})
module.exports = router