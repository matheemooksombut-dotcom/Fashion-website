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
const submitData = async()=>{
    

    const userData = RegisterDom();
    console.log("userData:", userData);

    // connect to  backend
     await axios.post('http://localhost:8000/users', userData)
}