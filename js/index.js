
$(document).ready(function(){
    $(window).scroll(()=>{
        if ($(this).scrollTop() >= $(".servies").offset().top-100){
            $(".header-menu").addClass("main-nav-fixed");
        }
        else{
            $(".header-menu").removeClass("main-nav-fixed")
        }
    })
    $(".projects").owlCarousel({
        loop:true,
        autoplay:true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            },
            1600:{
                items:4
            }
        },
        navText: [
            '<span><</span>',
            '<span>></span>'
        ],
        
        
    });
    $(".service-items").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            },
            1600:{
                items:4
            }
        }
    });
    $(".main-menu-item").click((e)=>{
        let getID=$(e.target).attr("href")
        console.log(getID)
        $("html,body").animate({"scrollTop":`${$(getID).offset().top}px`},500)
    })
    $(".mobile-button").click(()=>{
        $(".open-menu").toggleClass("active");;
        $(".close-menu").toggleClass("active");
        $(".main-menu").slideToggle(200)
    })
  });