(function($){
  $(function(){
    $('.slideshow').slick({
      infinite: true,
      speed: 300,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      autoplay: true,
      lazyLoad: 'ondemand'
    });
    $('.button-collapse').sideNav({menuWidth: 200});
    $('.modal-trigger').leanModal();
  }); // end of document ready
})(jQuery); // end of jQuery name space
