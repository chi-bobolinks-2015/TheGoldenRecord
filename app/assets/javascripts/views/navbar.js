$(document).ready(function() {

  $(".welcome").on("click", function() {
    $(this).fadeOut(1400);
    $(this).parent().slideUp(1800);
  });

  $("#about").on("click", function() {
    var popupBox = $(".popup-about");
    popupBox.fadeIn(400);
    $('body').append('<div class="container" id="bg-about"></div>');
    $("#bg-about").fadeIn(400);
  });

  $("#start").on("click", function() {
    var popupBox = $(".popup-start");
    popupBox.fadeIn(400);
    $('body').append('<div class="container" id="bg-start"></div>');
    $("#bg-start").fadeIn(400);
  });

  $("#meet").on("click", function() {
    var popupBox = $(".popup-meet");
    popupBox.fadeIn(400);
    $('body').append('<div class="container" id="bg-meet"></div>');
    $("#bg-meet").fadeIn(400);
  });

  $("body").on("click", ".close", function() {
    $(".popup-info").hide();
    $("#mask").remove();
    $("#bg-about").remove();
    $("#bg-start").remove();
    $("#bg-meet").remove();
  });

});
