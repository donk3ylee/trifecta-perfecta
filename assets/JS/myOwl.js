$(document).ready(function(){
    $(".owl-carousel").owlCarousel({


      loop: true,
          //Basic Speeds
      slideSpeed : 200,
      paginationSpeed : 800,

      
      //Autoplay
      autoPlay : false,
      goToFirst : true,
      goToFirstSpeed : 1,
    
      // Navigation
      navigation : true,
      navigationText : false,  //["prev","next"],
      pagination : false,
      // paginationNumbers: true,
    
      // Responsive
      responsive: true,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [980,2],
      itemsTablet: [768,2],
      itemsMobile : [479,1]
    });
})
