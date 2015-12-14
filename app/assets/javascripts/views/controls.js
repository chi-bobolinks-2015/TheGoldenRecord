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

function setControls(mix){
  // eventually each of the moveSlider methods could take in 2 parameters, the first is the divID, the second would be the soundID
  moveSlider("volume-slider");
  moveSlider("pitch-slider");
  moveSlider("tempo-slider");
}


function moveSlider(divId){
  $(window).load(function(event){
    console.log("Inside of move slider")
    $("#" + divId).slider({
    value: 60,
    orientation: "horizontal",
    range: "min",
    animate: true
    });
  });
}