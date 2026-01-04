// DOM -/


// Register     Dom
const submitData = async () => {
  const data = RegisterDom()

  if (data.Password !== data.ConfrimePassword) {
    alert('Password ไม่ตรงกัน')
    return
  }

  const payload = {
    Username: data.Username,
    Password: data.Password,
    Firstname: data.Firstname,
    Lastname: data.Lastname
  }

  try{
    await axios.post('http://localhost:3000/adduser', payload)
    alert('สมัครสมาชิกสำเร็จ')
  }catch(err){
    console.error(err)
    alert('ส่งข้อมูลไม่สำเร็จ')
  }
  
}
