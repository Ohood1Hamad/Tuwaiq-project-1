function setFormeMessage(formElement,type,message) {
    const messageElement =formElement.querySelector(".form--massage");

  messageElement.textContent =massege;
  messageElement.classList.remove("form--massage__success", "form--massage__error");
  messageElement.classList.add("form--massage__${type}");

}
function setInputError(inputElement, message) {
    inputElement.classList.add("form--input__error");
    inputElement.parentElement.querySelector(".form--input_error_massage").textContent=message;
    
}

document.addEventListener("DOMContentLoaded",()=>{
    const loginform = document.querySelector("#login");
    const createAccountform = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click",e => {
        loginform.classList.add("form--hidden");
        createAccountform.classList.remove("form--hidden");
        e.preventDefault();


    });
    document.querySelector("#linkLogin").addEventListener("click",  e => {
        loginform.classList.remove("form--hidden");
        createAccountform.classList.add("form--hidden");
        e.preventDefault();


    });
    loginform.addEventListener("submit",e => {
        e.preventDefault();
        setFormeMessage(loginform,"error", "Invalid username/password wrong");
    });

    document.querySelectorAll(".form--input").forEach(inputElement =>{
        inputElement.addEventListener("blur",e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length <9){
                setInputError(inputElement,"Username must be at least 9 characters in length");

            }
        })
    })
});


let  username=document.querySelector("#user"); 
let  email=document.querySelector("#email"); 
let password=document.querySelector("#password"); 
let loginbt=document.querySelector("#login"); 
let getuser=localStorage.getItem('user'); 
let getpass=localStorage.getItem('password'); 
 
loginbt.addEventListener('click',function(){ 
    // e.preventDefault(); 
 
    // console.log('user: '+getuser); 
    // console.log('pwd: '+getpass); 
    if(username.value === ""||password.value === ""){ 
        alert("please enter your Data"); 
    }else if( (getuser.trim() ===  username.value.trim()) &&  (getpass.trim() === password.value.trim())){ 
    
setTimeout(()=>{ 
 
    window.location='prducte.html'; 
    },1500) 
     
     
     
 
      }else{ 
          alert("user name or password is wrong"); 
      } 
         
     
 
    });