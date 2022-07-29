

 // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
   $("html, body").animate({ scrollTop: 0 }, "slow");
    event.preventDefault();
  });





var p = $( "#footer-top" );
var position = p.position().top;
var minpos = position-300;
  // Scroll to top button appear
   $(document).on('scroll', function() {
     var scrollDistance = $(this).scrollTop();
     if (scrollDistance > minpos) {

       $('.icons').fadeOut();
     } else {
       $('.icons').fadeIn();
     }
   });

   

  $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
          
          items: 3,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          nav               : true

      });
      $('.play').on('click', function() {
          owl.trigger('play.owl.autoplay', [1000])
      })
      $('.stop').on('click', function() {
          owl.trigger('stop.owl.autoplay')
      })
  })


  

 // owl carousel start end

 // $(".itmem__active a").click(function(){
   
 //   $('li').removeClass('itmem__active');
 //   $('li').addClass('itmem__active');
 // });




 // $(document).ready(function(){
 //   $('ul.ul__hover li a').click(function(){
 //     $('ul__hover li a').removeClass("item__active");
 //     $(this).addClass("item__active");
 // });
 // });