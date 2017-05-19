$(document).ready(function(){
  $('.slideshow').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
        



/*  function initMap() {
    var uluru = {lat: 35.725987, lng: 139.730386};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });
};
})*/