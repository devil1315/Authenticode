$(document).ready(function () {
  var loader = $("#preloader");

  setTimeout(function () {
    loader.fadeOut(1000);
  }, 2000);

  $(window).on("beforeunload", function () {
    loader.fadeIn(1000);
  });
});
