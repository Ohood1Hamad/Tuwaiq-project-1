$(document).ready(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()> 40 ){
            $('#topBtn').fadeiIn();
        } else{
            $('#topBtn').fadeout();
        }

        
    })
    $("#topBtn").click(function () {
        
        $('html ,body').animate({scrollTop :0},800);

    })
    
})

// $(".munu-toggle-btn").click(function (e) {
//     $("this").toggleclass("fa-time");
//     const newLocal = "active";
//     $(".navigation-menu").toggleclass(newLocal);
    
// });
