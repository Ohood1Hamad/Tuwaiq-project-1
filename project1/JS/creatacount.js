function store(){
    let name = document.getElementById('username');
    let email= document.getElementById('email');
    let pw = document.getElementById('password');
    let numbers = /[0-9]/g;

    console.log("HELLO");

    if(name.value.length == 0){
        swal('Please fill in username');

    }else if(email.value.length == 0){
        swal('Please fill in email');
    }else if(pw.value.length == 0){
        swal('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0 && email.value.length == 0){
        swal('Please fill in your informatoin');

     } else if(!pw.value.match(numbers)){
            swal('please add 1 number');


    }else{
        localStorage.setItem('username', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('passeord', pw.value);

        swal('Your account has been created');
    }
} 

//checking
function check(){
    let storedName = localStorage.getItem('username');
    let storedemail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('password');

    let userName = document.getElementById('user');
    let useremail = document.getElementById('e-mail');
    let userPw = document.getElementById('pword');

    if(userName.value == storedName && userPw.value == storedPw && useremail.value == storedemail ){
        console.log("passed");
        
        window.location.href="./flowerall.html";
    }else{
        swal('Error on login');
    }
}

