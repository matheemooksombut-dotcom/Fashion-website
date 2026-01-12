



// DOM -/------>




// PostUserInformation 
function PostUserDom(){
  return{
    User_Id:document.querySelector('.PostUserID').value  , 
    Username:document.querySelector('.PostUsername').value   , 
    Firstname:document.querySelector('.PostFirstname').value  , 
    Lastname:document.querySelector('.PostLastname').value   , 
    

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




// Submit Login 
const loginData  = async (e)  =>{
  e.preventDefault()
  const login =  LoginDom()
  
  try {
     await axios.post('http://localhost:3000/login', login) 
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
  if(Object.values(data).includes("")){
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
}

// Get User
const getUser = async (e) => {
  e.preventDefault()
  const InfoUser = PostUserDom()
  try {
    const response = await axios.get(`http://localhost:3000/users/${InfoUser.User_Id}`)
    const userData = response.data
    
    
    

    // นำข้อมูลที่ได้จาก Server มาใส่กลับเข้าไปใน Input
    document.querySelector('.PostUsername').value = userData.Username
    document.querySelector('.PostFirstname').value = userData.Firstname
    document.querySelector('.PostLastname').value = userData.Lastname


}catch(error){
  console.error(error)
}
}