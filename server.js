const express = require('express')
const app = express()
const port= 3000; 

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(3000, () => {
  console.log(`🚀 Server is running at:`)
  console.log(`   → Local:   http://localhost:3000`)
})

