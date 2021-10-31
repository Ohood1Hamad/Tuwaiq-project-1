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


// function store(){
//     let name = document.getElementById('email');
//     let pw = document.getElementById('password');
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;

//     if(name.value.length == 0){
//         alert('Please fill in email');

//     }else if(pw.value.length == 0){
//         alert('Please fill in password');

//     }else if(name.value.length == 0 && pw.value.length == 0){
//         alert('Please fill in email and password');

//     }else if(!pw.value.match(numbers)){
//         alert('please add 1 number');

//     }else if(!pw.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');

//     }else if(!pw.value.match(lowerCaseLetters)){
//         alert('please add 1 lovercase letter');

//     }else{
//         localStorage.setItem('email', name.value);
// //         localStorage.setItem('password', pw.value);
// //         alert('Your account has been created');
// //     }
// // }

// // //checking
// // function check(){
// //     let storedName = localStorage.getItem('email');
// //     let storedPw = localStorage.getItem('password');

// //     let userName = document.getElementById('userName');
// //     let userPw = document.getElementById('userPw');

// //     if(userName.value == storedName && userPw.value == storedPw){
// //         console.log("passed");
// //         window.location.href="./flowerall.html";
// //     }else{
// //         alert('Error on login');
// //     }
// // }
// function store(){
//     let name = document.getElementById('name');
//     let pw = document.getElementById('pw');
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;

//     if(name.value.length == 0){
//         alert('Please fill in email');

//     }else if(pw.value.length == 0){
//         alert('Please fill in password');

//     }else if(name.value.length == 0 && pw.value.length == 0){
//         alert('Please fill in email and password');

//     }else if(!pw.value.match(numbers)){
//         alert('please add 1 number');

//     }else if(!pw.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');

//     }else if(!pw.value.match(lowerCaseLetters)){
//         alert('please add 1 lovercase letter');

//     }else{
//         localStorage.setItem('name', name.value);
//         localStorage.setItem('pw', pw.value);
//         alert('Your account has been created');
//     }
// }

// //checking
// function check(){
//     let storedName = localStorage.getItem('name');
//     let storedPw = localStorage.getItem('pw');

//     let userName = document.getElementById('userName');
//     let userPw = document.getElementById('userPw');

//     if(userName.value == storedName && userPw.value == storedPw){
//         console.log("passed");
//         window.location.href="./yoga.html";
//     }else{
//         alert('Error on login');
//     }
// }