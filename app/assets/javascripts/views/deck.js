function addToDeck(){
  $(".deck").droppable({
    drop: function(event, ui) {
      console.log("dropped");
    }
  });
}
