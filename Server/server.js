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

// Login 
app.post('/login' , async (req , res)=>{
  try {
    const user = req.body
      const results = await conn.query('SELECT * FROM user WHERE Username = ? AND Password = ?' , [user.Username , user.Password])
      if(results[0].length > 0){
        res.json({
          message: 'Login success',
          user: results[0][0]
        })
      } else {
        res.status(401).json({
          message: 'Invalid Username or Password'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
})

//PostProduct
app.post('/addproduct', async (req, res) => {
  try {
    const product = req.body

    const result = await conn.query(
      'INSERT INTO product (Productname, ProductPrice) VALUES (?, ?)',
      [
        product.Productname,
        product.ProductPrice
      ]
    )

    res.json({
      message: 'Add product success',
      productId: result[0].insertId
    })

  } catch (error) {
    console.error(error.message)
    res.status(500).json({
      message: 'Add product failed',
      error: error.message
    })
  }
})







// Register  
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
    // แก้ไข WHERE id เป็น WHERE User_id ให้ตรงกับ Database
    const results = await conn.query('DELETE from user WHERE User_id = ?', id)
    res.json({
      message: 'delete ok' , 
      data: results[0]
    })
  }catch(error){
    console.error('error message' , error.message)
    res.status(500).json({
      message:'somthing wrong'
    })
  }

})
// Get User เรียก user มาแสดง หน้า Info
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const results = await conn.query('SELECT * FROM user WHERE User_id = ?', [id])
    if (results[0].length > 0) {
      res.json(results[0][0])
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})






//  Running Website
app.listen(PORT  , async (req  , res )=>{
  await initMySQL()
  console.log(`http://localhost:${PORT}`)
})