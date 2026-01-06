



// DOM -/




// Register     Dom
// ดึงค่าจาก input
function RegisterDom() {
  return {
    Username: document.querySelector('.Username').value,
    Password: document.querySelector('.Password').value,
    ConfrimePassword: document.querySelector('.ConfrimePassword').value,
    Firstname: document.querySelector('.Firstname').value,
    Lastname: document.querySelector('.Lastname').value
  }
}

// submit form
const submitData = async (e) => {
  e.preventDefault()

  const data = RegisterDom()

  if (data.Password !== data.ConfrimePassword)  {
    alert('Password ไม่ตรงกัน ❗️')
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

    alert('สมัครสมาชิกสำเร็จ ✅')
    e.target.reset()

  } catch (err) {
    console.error(err)
    alert('ส่งข้อมูลไม่สำเร็จ ❌ กรุณาลองใหม่')
  }
}

