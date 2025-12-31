const express   = require("express")
const bodyParser   = require("body-parser")
const cors  = require("cors")
const PORT  = 3000||env 
const app  = express()

let users = []

// Midelware 
app.use(bodyParser.json())
app.use(cors())







// Route 

// เพิ่ม 
app.post('/adduser'  , (req  , res) =>{
  let user = req.body
  users.push(user)
  res.json(
    {
      message : "suceess" , 
      users : user
    }
  )
})

// เรียกดู
app.get('/users', (req , res) =>{
  res.json(users)
})





// 
app.listen(PORT  , (req  , res )=>{
  console.log(`http://localhost:${PORT}`)
})