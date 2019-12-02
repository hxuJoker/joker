const express = require('express')
const bodyParser = require('body-parser')
const loginRouter = require('./routes/login')
const menuRouter = require('./routes/menu')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(loginRouter)
app.use(menuRouter)

app.listen(3000,()=>{
  console.log('Server is running');
})