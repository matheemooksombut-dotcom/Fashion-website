// DOM -/


// Register     Dom
const submitData = async () => {
  const data = RegisterDom()

  if (data.passwordDom !== data.confrimePasswordDom) {
    alert('Password ไม่ตรงกัน')
    return
  }

  const payload = {
    Username: data.UsernameDom,
    password: data.passwordDom,
    Firtname: data.FirstnameDom,
    Lastname: data.LastnameDom
  }

  await axios.post('http://localhost:3000/adduser', payload)
}
