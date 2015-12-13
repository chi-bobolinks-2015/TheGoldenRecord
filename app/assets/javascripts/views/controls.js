function loadImage(imageUrl, cell){
  $(cell).append("<img src=" + imageUrl + " class='mixer-image'>");
}

function draggableImage(){
  $(".mixer-image").draggable({
    containment: ".container",
    snap: ".deck",
    helper: "clone"
  });
}
