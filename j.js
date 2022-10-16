$(document).ready(function() {
  $('dd').css('display', 'none');
  $('dd').fadeOut(1000);
  $('.link').click(function(event) {
    event.preventDefault();
    newLocation = $('.download.html').attr("href");
    $('body').fadeOut(10, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
});
