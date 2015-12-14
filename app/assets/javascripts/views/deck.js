function addToDeck(){
  $(".deck").droppable({
    accept: ".mixer-image",
    drop: function(event, ui) {
      ui.draggable.parent().toggleClass("on-deck");
    }
  });
}
