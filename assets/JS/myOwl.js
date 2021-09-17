


$(document).ready(function(){
// products carousel
  $('.product-carousel').owlCarousel({
    loop:true,
    items:3,
    margin:10,
    // center:true,
    nav:true,
    navContainer: false,
    dots:false,
    stagePadding:0,

    responsiveRefreshRate:100,
    responsive:{
        0:{
            items:1
        },
        675:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

//review carousel
    $('.review-carousel').owlCarousel({
        items:1,
        loop:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:400,
        autoplayHoverPause:true,
  });

});


