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
    $('input.use-sms')
    .change(function(){
      if($(this).is(':checked')){
        $('.email.mutually-exclusive').hide();
        $('.sms.mutually-exclusive').show();
      }
      else{
        $('.sms.mutually-exclusive').hide();
        $('.email.mutually-exclusive').show();
      }
    })
    .trigger('change');
    $('.contact.by').click(function(){
      $('input.use-sms').prop('checked', $(this).hasClass('sms')).trigger('change');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
