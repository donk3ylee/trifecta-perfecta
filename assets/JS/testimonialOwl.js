$(document).ready(function(){
// products carousel
    $('.testimonals-carousel').owlCarousel({
    loop:true,
    items:3,
    margin:10,
    center:true,
    nav:false,
    navContainer: true,
    dots:true,
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