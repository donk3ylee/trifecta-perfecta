
$(document).ready(function(){
    // testimonials carousel
    $('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        dots:true,
        margin:30,
        autoplay:true,
        autoplaySpeed:400,
        autoplayHoverPause:true,
        // center:true,

        responsiveRefreshRate:100,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            }
        }
    });
});