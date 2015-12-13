function loadImage(imageUrl, cell){
  $(cell).append("<img src=" + imageUrl + " class='mixer-image'>");
  $(cell).append("<a class='boxclose'></a>");
}

function draggableImage(){
  $(".mixer-image").draggable({
    containment: ".container",
    snap: ".deck",
    helper: "clone"
  });
}
