


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
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
        650:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel(


//       loop: true,
//           //Basic Speeds
//       slideSpeed : 200,
//       paginationSpeed : 800,

      
//       //Autoplay
//       autoPlay : false,
//       goToFirst : true,
//       goToFirstSpeed : 1,
    
//       // Navigation
//       navigation : true,
//       navigationText : false,
//       pagination : false,
//       // paginationNumbers: true,
    
//       // Responsive
//       responsive: true,
//       items : 3,
//       itemsDesktop : [1199,3],
//       itemsDesktopSmall : [980,2],
//       itemsTablet: [768,2],
//       itemsMobile : [479,1]
//     );
// })
