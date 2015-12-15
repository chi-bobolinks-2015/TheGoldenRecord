$(document).ready(function() {

  $("#about").on("click", function() {
    var popupBox = $(".popup-about");
    popupBox.fadeIn(400);
    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);
  });

  $("#start").on("click", function() {
    var popupBox = $(".popup-start");
    popupBox.fadeIn(400);
    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);
  });

  $("#meet").on("click", function() {
    var popupBox = $(".popup-meet");
    popupBox.fadeIn(400);
    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);
  });

});
