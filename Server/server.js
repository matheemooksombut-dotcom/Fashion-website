const express   = require("express")
const bodyParser   = require("body-parser")
const cors  = require("cors")
const PORT  = 3000||env 
const app  = express()

let users = []
let counter = 1

// Midelware 
app.use(bodyParser.json())
app.use(cors())






// Route 

// เรียกดู user ตาม ID
app.get('/user/:id' , (req , res) =>{
  let id = req.params.id

  let selectedIndex = users.findIndex(user => user.id ==id)

  res.json(users[selectedIndex])
})


// เรียกดู user ทั้งหมด
app.get('/users', (req , res) =>{
  
  res.json(users)
})


// เพิ่ม 
app.post('/adduser'  , (req  , res) =>{
  let user = req.body
  user.id  = counter
  counter++
  users.push(user)
  res.json(
    {
      message : "suceess" , 
      users : user
    }
  )
})




// อัพเดท User
app.put('/update/:id', (req  ,res)=>{
  let id  = req.params.id
  let updateUser  = req.body
  

  let selectedIndex  = users.findIndex(user => user.id==id)


  users[selectedIndex].Firstname = updateUser.Firstname ||   users[selectedIndex].Firstname
  users[selectedIndex].Lastname = updateUser.Lastname ||  users[selectedIndex].Lastname

  res.json({
    message:'Updated suceess',
    data:{
      user:updateUser  , 
      indexUpdated: selectedIndex 
    }
  })
  })






// 
app.listen(PORT  , (req  , res )=>{
  console.log(`http://localhost:${PORT}`)
})