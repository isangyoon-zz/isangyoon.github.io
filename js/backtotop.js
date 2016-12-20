jQuery(document).ready(function($) {
  var offset = 300;
  var offset_opacity = 2000;
  var scroll_top_duration = 700;

  var $back_to_top = $('.back-to-top');

  $(window).scroll(function() {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-visible') : $back_to_top.removeClass('back-to-top-visible back-to-top-fade-out');

    if($(this).scrollTop() > offset_opacity) $back_to_top.addClass('back-to-top-fade-out');
  });

  $back_to_top.on('click', function(event) {
    event.preventDefault();

    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration);
  });
});
