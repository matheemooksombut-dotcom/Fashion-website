



// DOM -/------>

//ProductItems  Dom
function ProductItemsDom(){
  const priceText = document.querySelector('.product-price').innerText
  // ใช้ Regex ลบทุกอย่างที่ไม่ใช่ตัวเลข 0-9 หรือจุด (.) ออก (เช่น ลบ ฿ และ ,)
  const cleanPrice = priceText.replace(/[^0-9.]/g, '')

  return{
    Productname:document.querySelector('.product-name').innerText,
    ProductPrice: cleanPrice


  }
}


// PostUserInformation  Dom
function PostUserDom(){
  return{
    User_Id:document.querySelector('.PostUserID').innerText  , 
    Username:document.querySelector('.PostUsername').innerText   , 
    Firstname:document.querySelector('.PostFirstname').innerText  , 
    Lastname:document.querySelector('.PostLastname').innerText   , 
    

  }

}

// Login Dom
function LoginDom(){
  return{
    Username: document.querySelector('.UsernameInput').value,
    Password: document.querySelector('.PasswordInput').value
  }
}


// Register Dom
function RegisterDom() {
  return {
    Username: document.querySelector('.Username').value,
    Password: document.querySelector('.Password').value,
    ConfrimePassword: document.querySelector('.ConfrimePassword').value,
    Firstname: document.querySelector('.Firstname').value,
    Lastname: document.querySelector('.Lastname').value
  }
}

//Product Items
const ProductItems = async (e) =>{
  e.preventDefault()
  const product = ProductItemsDom()
  try {
    const response = await axios.post('http://localhost:3000/addproduct', product)
    console.log(response.data)

}catch(error){
  console.error(error)
}
}






// Submit Login 
const loginData  = async (e)  =>{
  e.preventDefault()
  const login =  LoginDom()
  
  try {
     const response = await axios.post('http://localhost:3000/login', login) 
     
     // บันทึก ID ลง LocalStorage เพื่อนำไปใช้หน้าอื่น
     if(response.data && response.data.user){
        console.log("Login Response User:", response.data.user); // Debug: ดูข้อมูลที่ได้จาก Server
        // รองรับทั้ง id ตัวเล็กและตัวใหญ่ และ User_id แบบต่างๆ (เผื่อ Database ส่งมาเป็น user_id หรือ User_ID)
        const userId = response.data.user.User_Id || response.data.user.user_id || response.data.user.User_ID || response.data.user.id || response.data.user.ID;
        
        if(userId) {
            localStorage.setItem('currentUserId', userId)
            console.log("Saved UserID to LocalStorage:", userId);
        }
     }

      Swal.fire({
        title: 'เข้าสู่ระบบสำเร็จ ✅',
        text: '',
        icon: 'success',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#000'
      
      }).then(()=>{
        window.location.replace('./serversite/Homepage.html')
      })
      
    
  } catch (error) {
    Swal.fire({
      title: 'เข้าสู่ระบบไม่สำเร็จ ❌ ',
      text: 'กรุณาลองใหม่',
      icon: 'error',
      confirmButtonText: 'ตกลง',
      confirmButtonColor: '#000'
         
  })

}
}


// Register form
const RegisterData = async (e) => {
  e.preventDefault()

  const data = RegisterDom()
  // Validation
  if(data.Username === ""){
     Swal.fire({
    title: 'คุณไม่ได้กรอก Username❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }else if(data.Password === "" ){
       Swal.fire({
    title: 'กรุณากรอกรหัสผ่าน❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }else if(data.ConfrimePassword === ""){
     Swal.fire({
    title: 'กรุณากรอกยืนยันรหัสผ่าน❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }
  else if(data.Password.length < 8){
     Swal.fire({
    title: 'รหัสผ่านต้องมากกว่า 8 ตัวอักษร❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }else if (data.Password !== data.ConfrimePassword)  {
    Swal.fire({
    title: 'Password ไม่ตรงกัน ❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }else if(data.Firstname === ""){
     Swal.fire({
    title: 'คุณไม่ได้กรอก Firstnamename❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }else if(data.Lastname === ""){
     Swal.fire({
    title: 'คุณไม่ได้กรอก Lastname❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
     confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }
  else if(Object.values(data).includes("")){
     Swal.fire({
    title: 'กรุณากรอกข้อมูลให้ครบถ้วน ❗️ ',
    text: 'กรุณาลองใหม่',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    return
  }


  const payload = {
    
    Username: data.Username,
    Password: data.Password,
    Firstname: data.Firstname,
    Lastname: data.Lastname
    
  }

  try {
    await axios.post('http://localhost:3000/adduser', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // if(){
      
    // }
    Swal.fire({
    title: 'สมัครสมาชิกสำเร็จ ✅',
    text: '',
    icon: 'success',
    confirmButtonText: 'เข้าสู่ระบบ',
    confirmButtonColor: '#000'
    }).then((result)=>{
      if(result.isConfirmed){
        window.location.href ='/login.html'
      }
        
      
    })

    
    e.target.reset()

  } catch (err) {
    console.error(err)

    Swal.fire({
    title: 'ส่งข้อมูลไม่สำเร็จ ❌ ',
    text: 'กรุณาลองใหม่ โปรดตรวจสอบข้อมูลให้ครบ',
    icon: 'error',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#000'
    })
    
  }
  }


// Get User
const getUser = async () => {
  // ดึง ID จาก LocalStorage 
  const userId = localStorage.getItem('currentUserId')
  console.log('Current User ID:', userId); // Debug: ดูว่ามี ID หรือไม่


  try {
    const response = await axios.get(`http://localhost:3000/users/${userId}`)
    const userData = response.data
    
    console.log('User Data from Server:', userData); // Debug: ดูข้อมูลที่ได้จาก Server
    
    

    // นำข้อมูลที่ได้จาก Server มาใส่กลับเข้าไปใน <span></span>
    // เช็ค key หลายรูปแบบเพื่อให้แน่ใจว่าดึงค่าได้
    if(document.querySelector('.PostUserID')) document.querySelector('.PostUserID').innerText = userData.User_Id || userData.user_id || userData.user_ID || userData.id || userId || "-"
    if(document.querySelector('.PostUsername')) document.querySelector('.PostUsername').innerText = userData.Username || userData.username || "-"
    if(document.querySelector('.PostFirstname')) document.querySelector('.PostFirstname').innerText = userData.Firstname || userData.firstname || "-"
    if(document.querySelector('.PostLastname')) document.querySelector('.PostLastname').innerText = userData.Lastname || userData.lastname || "-"


}catch(error){
  console.error(error)
}
}

// เรียกใช้ฟังก์ชันอัตโนมัติถ้าอยู่ในหน้า UserInfo
document.addEventListener('DOMContentLoaded', () => {
  // เช็ค wrapper หรือเช็คว่ามี element ที่จะแสดงผลอยู่จริงไหม (เผื่อลืมใส่ class wrapper)
  if(document.querySelector('.wrapper-user-info') || document.querySelector('.PostUserID')){
    getUser()
  }
})