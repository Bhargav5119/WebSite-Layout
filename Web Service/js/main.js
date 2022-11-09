$(document).ready(function () {

    $(window).on("load scroll", function () {

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav_toggle');


        if ($(window).scrollTop() > 50) {
            $('.header').css({ 'background': '#6C5CE7', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    })

    $(".accordian_header").click(function(){
        $(".accordian .accordian_body").slideUp(1000);
        $(this).next(".accordian_body").slideDown("slow");
        $(".accordian .accordian_header span").text('+');
        $(this).children("span").text("-");
    })



    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav_toggle");
    })





})