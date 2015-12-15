$(document).ready(function() {

  $("#about").on("click", function() {
    var popupBox = $(".popup-about");
    popupBox.fadeIn(400);

    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);

  });

  $("body").on("click", ".close", function() {
    $(".popup-info").hide();
    $("#mask").remove();
  });

});
