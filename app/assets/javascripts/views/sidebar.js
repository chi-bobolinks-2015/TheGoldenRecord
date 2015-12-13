$(document).ready(function() {
  $(".draggableTrack").draggable({
    containment: "document",
    cursor: "move",
    snap: ".cell"
  });
});
