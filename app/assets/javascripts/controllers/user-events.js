function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  removeTrack(mix);
};

// ############### Drag and Drop functionality ##################

// Loads track info into mixer
function dropTrack(mix){
  $(".cell").droppable({
    accept: ".draggableTrack",
    drop: function(event, ui) {
      console.log("New track dropped in honeycomb")
      var draggable = ui.draggable.clone();
      var divId = $(this).attr("id");

      var trackId = convertId(divId);
      var trackTitle = draggable.text();
      var image = draggable.attr("image");
      var trackAdded = {src: draggable.attr("url"), id: trackId, name: draggable.html()}
      var innerText = $(this).find(".inner-text");
      $(innerText).removeClass("emptied");

      mix.addTrack({'urls': draggable.attr("url"), 'divId': trackId})
      assignTrackInfoHover($(this), mix, trackTitle);
      loadImage(image, $(this));

    }
  });
}

// Makes track title on hexagon draggable for removeTrack
function draggableMixText(cell) {
  var text = $(cell).find(".inner-text");
  console.log(text)
  $(text).draggable({
    containment: ".container",
    cursor: "move",
    snap: ".sidebar"
  });
}

function removeTrack(mixer) {
  $(".cell").on("mousedown", function() {
    var $targetCell = $(this);
    var divId = $targetCell.attr("id")
    var trackId = convertId(divId);
    var drag = $targetCell.find(".inner-text");
    drag.draggable( {
      containment: ".container",
      cursor: "move"
    });

    $('.mix').droppable({
    accept: drag,
    drop: function(event, ui) {
      var innerHex = $(drag).parent().parent();
      mixer.stopTrack(trackId);
      mixer.removeTrack(trackId);
      $(drag).addClass("emptied");
      $(drag).empty();
      $(drag).attr('style', "position: relative;");
      $(innerHex).removeClass("active");
      unloadImage(innerHex);
     }
    });
  });
}


// Hover displays track information and listens for return bar key up
function onHoverOptions(currentMixer){
  $(".cell").bind("hover, keyup", function() {
    var divId = $(this).attr("id")
  // console.log("hovering in " + trackId)
    var $targetComb =  $(this).find('.hex_inner')
    var targetCombText = $(this).find('.inner-text')

    // if ( $(targetCombText).hasClass("emptied") ){
    //   $(targetCombText).attr('style', "position: relative;");
    // }

      // $(window).on("keyup", function(event){
        // only show controls for a track that is currently playing
        if ( ($targetComb).hasClass("active") && event.keyCode === 13 ){
           event.stopPropagation();
          console.log("sensing a key up inside a hover")
          setTargetForControlPanel(divId,currentMixer)
        } else {
          currentMixer.assignTarget(null);
        };
      // });

  });
  // mouseExitCell
};

// function mouseExitCell(){
//   $(this).find("#track-info").remove();
// }

function returnDivs() {
  return $('div.cell')
};
// Start and Stop on click, toggles "active" class
function startAndStopTrack(mix) {
  // returnDivs().on('click', controlBoard.togglePlay.bind(controlBoard));
  returnDivs().on('click', function(e){
    var $targetComb =  $(this).find('.hex_inner')
    $targetComb.toggleClass('active');
    var divId = $(this).attr("id")
    var trackId = convertId(divId);
    mix.assignTarget(trackId)
    $targetComb.hasClass("active") ? mix.playTrack(trackId) : mix.stopTrack(trackId);
  });
}


function globalPause(mix) {
 $(window).on('keyup', function(e) {
    e.preventDefault();
    if(e.keyCode == 32) {
      if(mix.pause === false) {
        mix.globalPause();
      } else {
        mix.globalPlay();
      }

    };
  });
}






