let user=document.querySelector("#user"); 
let email=document.querySelector("#e-mail"); 
let password=document.querySelector("#password"); 
let regisBtn=document.querySelector("#sginin"); 
 
// AddEvent on click and I use if statment to check the input and save the data 
regisBtn.addEventListener('click', function(){ 
 
 
    if(user.value === ""||email.value === ""||password.value === ""){ 
        alert("please enter your Data"); 
    }else{ 
        window.localStorage.setItem('user',user.value); 
        window.localStorage.setItem('e-mail',email.value); 
        window.localStorage.setItem('password',password.value); 
       
         
    } 
    var entry = localStorage.getItem("entry");
    console.log("username: " + entry.user + "password: " + entry.pas);
    if(username.value == entry.user && password.value == entry.pass) {
        alert('You have successfully logged in.');
    
    }

 
setTimeout(()=>{ 
 
window.location='login.html'; 
},1500) 
 
 
});

$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
    });
    });
    
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
    
    
      
             $(function() {
               $("form[name='login']").validate({
                 rules: {
                   
                   email: {
                     required: true,
                     email: true
                   },
                   password: {
                     required: true,
                     
                   }
                 },
                  messages: {
                   email: "Please enter a valid email address",
                  
                   password: {
                     required: "Please enter password",
                    
                   }
                   
                 },
                 submitHandler: function(form) {
                   form.submit();
                 }
               });
             });
             
    
    
    $(function() {
      
      $("form[name='registration']").validate({
        rules: {
          firstname: "required",
          lastname: "required",
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        
        messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
          email: "Please enter a valid email address"
        },
      
        submitHandler: function(form) {
          form.submit();
        }
      });
    });
    