// DOM -/





// Register     Dom
function RegisterDom(){
   
   
    return{
        UsernameDom  : document.querySelector('.Username').value,
        passwordDom  : document.querySelector('.Password').value,
        confrimePasswordDom  : document.querySelector('.ConfrimePassword').value,
        FirstnameDom  : document.querySelector('.Firstname').value,
        LastnameDom  :document.querySelector('.Lastname').value
    }
    
   
}
function submitData(){
    

    const userData = RegisterDom();
    console.log("userData:", userData);

    // ตัวอย่างต่อ backend
    // axios.post('/register', userData)
}