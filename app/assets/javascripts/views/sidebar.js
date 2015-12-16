$(document).ready(function() {

  $(".category-name").on("click", function () {
    $(this).children().toggleClass("hidden");
  });

  $(".tracks").click(function(e) {
    e.stopPropagation();
  });

  $(".draggableTrack").draggable({
    containment: ".container",
    cursor: "move",
    snap: ".cell",
    helper: "clone"
  });

  $(".collapsible").on("click", function(){
    $(".sidebar").toggleClass("hidden");
    $(".mix").toggleClass("col-lg-10");
    $(".mix").toggleClass("col-lg-11");
  });

  $(".popup-window").on("click", function() {
    var trackId = $(this).data("track-id")
    var trackTitle = $(this).data("track-title")
    var trackDescription = $(this).data("track-description")
    var popupBox = $(".popup-box");
    popupBox.fadeIn(400);

    popupBox.empty();
    popupBox.append("<p>" + trackTitle + "</p>");
    popupBox.append("<p>" + trackDescription + "</p>");
    popupBox.append('<button type="button" class="close">Close</button>');

    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);

  });

  $("body").on("click", ".close", function() {
    $(".popup-info").hide();
    $("#mask").remove();
  });

});
