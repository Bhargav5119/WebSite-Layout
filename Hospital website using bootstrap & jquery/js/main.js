$(document).ready(function(){

    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav_menu").toggleClass("active")
    })

    $(window).on("load scroll",function(){
        $(".fa-bars").removeClass("fa-times");
        $(".nav_menu").removeClass("active")

        if($(window).scrollTop() > 30){
            $(".header").addClass("header_active")
        }else{
            $(".header").removeClass("header_active")
        }
    })

    $('.facility').magnificPopup({
        delegate: 'a',
		type: 'image',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
        }
    })


})