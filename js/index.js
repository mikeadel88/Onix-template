
$(document).ready(function(){
    $(window).scroll(()=>{
        if ($(this).scrollTop() >= $(".servies").offset().top){
            $(".main-nav").addClass("main-nav-fixed");
        }
        else{
            $(".main-nav").removeClass("main-nav-fixed")
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

  });