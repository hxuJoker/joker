const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const loginRouter = require('./routes/login')
const menuRouter = require('./routes/menu')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  secret:'joker',  // 配置加密字符串，会在原有加密基础之上和这个字符串拼起来去加密。增加安全性，防止客户端恶意伪造
  resave:false, 
  saveUninitialized:false // 无论你是否使用 session 都默认直接给你分配一把钥匙
}))

app.use(loginRouter)
app.use(menuRouter)

app.listen(3000,()=>{
  console.log('Server is running');
})