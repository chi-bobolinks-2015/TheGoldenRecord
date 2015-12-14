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
});
