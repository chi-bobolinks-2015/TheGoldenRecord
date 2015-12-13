function addToDeck(){
  $(".deck").droppable({
    drop: function(event, ui) {
      ui.draggable.parent().toggleClass("on-deck");
    }
  });
}
