
$(document).ready(function(){
    // testimonials carousel
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        items:2,
        // margin:20,
        // center:true,
        nav:false,
        dots:true,
        // stagePadding:0,
        // checkVisible:false,

        responsiveRefreshRate:100,
        responsive:{
            0:{
                items:1
            },
            675:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
});