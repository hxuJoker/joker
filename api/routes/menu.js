const express = require('express')

const router = express.Router()

const menuList = [
  {
    title:'内容管理',
    url:'content',
    name:'1',
    children:[
      {
        title:'文章管理',
        url:'content',
        name:'1-1',
      },
      {
        title:'文章管理',
        url:'content',
        name:'1-2',
      },
      {
        title:'文章管理',
        url:'content',
        name:'1-3',
      }
    ]
  },
  {
    title:'内容管理',
    url:'content',
    name:'2',
    children:[
      {
        title:'文章管理',
        url:'content',
        name:'2-1',
      },
      {
        title:'文章管理',
        url:'content',
        name:'2-2',
      },
      {
        title:'文章管理',
        url:'content',
        name:'2-3',
      }
    ]
  }
]
router.get('/api/menu' ,(req,res)=>{
  res.json({
    error:0,
    message:'注册成功',
    menuList:menuList
  })
})

module.exports = router