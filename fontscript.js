



// DOM -/------>

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
        window.location.href ='./serversite/Homepage.html'
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

  if (data.Password !== data.ConfrimePassword)  {
    Swal.fire({
    title: 'Password ไม่ตรงกัน ❗️ ',
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

