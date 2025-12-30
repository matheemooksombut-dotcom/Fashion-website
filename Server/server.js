const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const host  =  "localhost"
// const mysql = require('mysql2/promise')
const cors = require('cors')
const port= 3000; 


// Middel ware
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(port,host, () => {
  console.log(`🚀 Server is running at: http://${host}:${port}`)
  
})

