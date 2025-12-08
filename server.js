const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mysql = require('mysql2/promise')
const cors = require('cors')
const port= 3000; 



app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(3000, () => {
  console.log(`🚀 Server is running at:`)
  console.log(`   → Local:   http://localhost:3000`)
})

