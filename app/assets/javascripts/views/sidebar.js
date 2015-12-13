$(document).ready(function() {

  $(".draggableTrack").draggable({
    containment: "document",
    cursor: "move",
    snap: ".cell",
    helper: "clone"
  });

// Move this to another sensical folder.
  $(".cell").droppable({
    drop: function(event, ui) {
      var draggable = ui.draggable.clone();
      console.log("The track with " + draggable.attr("url") + "  ---- " + draggable.attr("id"));
      sounds.push({src: draggable.attr("url"), id: draggable.attr("id"), name: draggable.html()});
      loadSound(startMixer(), draggable.attr("id"), $(this).attr("id"));
      // console.log(sounds);

    }
  });

});
