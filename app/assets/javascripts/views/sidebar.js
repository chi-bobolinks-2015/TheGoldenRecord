$(document).ready(function() {

  $(".category-name").on("click", function () {
    $(this).children().toggleClass("hidden");
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
    console.log("THIS");
    var popupBox = $(this).attr('href');
    console.log(popupBox);
    $(popupBox).fadeIn(400);

    var popMarginTop = ($(popupBox).height() + 24) / 2;
    var popMarginLeft = ($(popupBox).width() + 24) / 2;

    $(popupBox).css({
      "margin-top": -popMarginTop,
      "margin-left": -popMarginLeft
    });

    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);
    return false;
  });

});
