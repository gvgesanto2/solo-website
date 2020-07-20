// Preloader
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

// Team Section
$(function () {
  $('#team-members').owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ]
  });
});

// Progress Bars
$(function () {
  $('#progress-elements').waypoint(
    function () {
      $('.progress-bar').each(function () {
        $('.progress-bar span').css('opacity', 1);
        $(this).animate(
          {
            width: $(this).attr('aria-valuenow') + '%'
          },
          1000
        );
      });
      this.destroy();
    },
    {
      offset: 'bottom-in-view'
    }
  );
});
