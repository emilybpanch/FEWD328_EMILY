$(document).ready(function(){

//hide top nav on scroll down; surface on scroll up//

$(function(){
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.navbar').outerHeight();
  
  $(window).scroll(function(event){
    didScroll = true;
  });
  
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 300);
  
  function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('.navbar').removeClass('nav-up').addClass('nav-down');
      }
    }
    
    lastScrollTop = st;
  }
  });


//Animate scroll between top nav and each section//


$('a[href*="#"]').click(function(event) {
      // Figure out which element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
         scrollTop: target.offset().top
        }, 2000);
        }
    });


//Slick slideshow plugin//

  $(".slideshow").slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 2,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '10x',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      }
    }
    ]
  });
});



