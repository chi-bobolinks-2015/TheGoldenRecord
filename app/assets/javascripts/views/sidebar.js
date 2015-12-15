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
    $("#sidebar").toggleClass("hidden");
    $(".mix").toggleClass("col-lg-9");
    $(".mix").toggleClass("col-lg-11");
  });

  $(".popup-window").on("click", function() {
    var popupBox = $(this).attr('href');
    $(popupBox).fadeIn(400);

    var popMarginTop = ($(popupBox).height() + 24) / 2;
    var popMarginLeft = ($(popupBox).width() + 24) / 2;

    $(popupBox).css({
      "margin-top": -popMarginTop,
      "margin-left": -popMarginLeft
    });

    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);

  });

    $(".container").on("click", "button.close", function() {
      console.log("This!");
      $(".popup-info").hide();
      $("#mask").remove();
      });
});
