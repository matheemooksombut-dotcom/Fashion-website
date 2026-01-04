const express   = require("express")
const bodyParser   = require("body-parser")
const cors  = require("cors")
const PORT = process.env.PORT || 3000
const app  = express()
const mysql = require('mysql2/promise')
const { error } = require("console")
let conn = null

const initMySQL =  async () => {
 conn = await mysql.createConnection({
      host: 'localhost' , 
      user:'root' , 
      password:'root' , 
      database: 'user' , 
      port:3306
    })
}


// Midelware 
app.use(bodyParser.json())
app.use(cors())










// Route 



// เรียกดู user ทั้งหมด
app.get('/users'  , async(req , res)=>{
  try{
      
    const results  = await conn.query('SELECT * FROM user')
    res.json(results[0])

  }catch(error){
    console.error('Error fetching users:' , error.message)
    res.status(500).json({erro: 'Error fetching users'})
    
  }

})



// เรียกดู user ตาม ID
app.get('/user/:id' , async (req , res) =>{

 try{
  let id = req.params.id
  let results  = await conn.query('SELECT * FROM user WHERE id = ? ' , id)

  if(results[0].length > 0 ){
    res.json(results[0][0])
  }else{
    res.status(404).json({
      message: 'DATA NOT FOUND'
    })
  }
  
 }catch(erro){
    console.error('error message' , error.message)
    res.status(500).json({
      message: 'something wrong'
    })
 }
})


// เพิ่ม 
app.post('/adduser', async (req, res) => {
  try {
    const user = req.body

    const result = await conn.query(
      'INSERT INTO user (Username, Password, Firstname, Lastname) VALUES (?, ?, ?, ?)',
      [
        user.Username,
        user.Password,
        user.Firstname,
        user.Lastname
      ]
    )

    res.json({
      message: 'Add user success',
      userId: result[0].insertId
    })

  } catch (error) {
    console.error(error.message)
    res.status(500).json({
      message: 'Add user failed'
    })
  }
})



// Deleaated
app.delete('/users/:id' , async(req , res)=>{
 

  try{
    let id = req.params.id
    const results = await conn.query('DELETE from user WHERE id = ?', id)
    res.json({
      message: 'delete ok' , 
      data: results[0]
    })
  }catch(erro){
    console.error('error message' , error.message)
    res.status(500).json({
      message:'somthing wrong'
    })
  }

})




// อัพเดท User
app.put('/update/:id', async (req  ,res)=>{
 
  try{
      let id  = req.params.id
      let updateUser  = req.body
      const results  =  await conn.query('UPDATE user SET ? WHERE id = ?' ,
        [updateUser , id])
      res.json({
        message: 'Updated Success' , 
        data: results[0]
      })
  }catch(erro){
    res.status(500).json({
      message: 'something wrong' 
    })
  }

  })

//  Running Website
app.listen(PORT  , async (req  , res )=>{
  await initMySQL()
  console.log(`http://localhost:${PORT}`)
})