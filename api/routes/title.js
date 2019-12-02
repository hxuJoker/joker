const express = require('express')
const Title = require('../model/title')
const router = express.Router()

router.get('/api/getTitleList', async (req,res)=>{
  try {
    let ret = await Title.find()
    res.status(200).json({
      err_code:0,
      list:ret
    })
  } catch (error) {
    res.status(500).json({
      err_code:0,
      message:error.message
    })
  }
})

router.get('/api/getTitleOne', async (req,res)=>{
  let body = req.query
  try {
    let ret = await Title.findOne({_id:body.id})
    res.status(200).json({
      err_code:0,
      list:ret
    })
  } catch (error) {
    res.status(500).json({
      err_code:0,
      message:error.message
    })
  }
})
router.get('/api/getTitleOneByName', async (req,res)=>{
  let body = req.query
  try {
    let ret = await Title.find({name:body.name})
    res.status(200).json({
      err_code:0,
      list:ret || []
    })
  } catch (error) {
    res.status(500).json({
      err_code:0,
      message:error.message
    })
  }
})

router.post('/api/saveTitleOne', async (req,res)=>{
  let body = req.body
  try {
    await new Title(body).save()
    res.status(200).json({
      err_code:0,
      message:"保存成功"
    })
  } catch (error) {
    res.status(500).json({
      err_code:0,
      message:error.message
    })
  }
})

router.get('/api/deleteTitleOne', async (req,res)=>{
  let body = req.query
  try {
    await Title.findByIdAndDelete({_id:body.id})
    res.status(200).json({
      err_code:0,
      message:'删除成功'
    })
  } catch (error) {
    res.status(500).json({
      err_code:0,
      message:error.message
    })
  }
})

router.post('/api/updateTitleOne', async (req,res)=>{
  let body = req.body
  try {
    await Title.findByIdAndUpdate({_id:body._id},body)
    res.status(200).json({
      err_code:0,
      message:'修改成功'
    })
  } catch (error) {
    res.status(500).json({
      err_code:0,
      message:error.message
    })
  }
})

module.exports = router 