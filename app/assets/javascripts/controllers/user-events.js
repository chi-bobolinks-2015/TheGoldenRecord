function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  removeTrack(mix);
  onHexHover();
  openControls(mix)
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


$(".mydiv")
    .on("mouseenter", function () {
        activeElem = $(this);
    }).on("mouseleave", function () {
        if(activeElem && activeElem.is(this)) {
            activeElem = null;
        }
    });

// Hover listening
function onHexHover(){
  $(".cell").on("mouseenter", function() {
    activeElem = $(this);
   }).on("mouseleave", function () {
        if(activeElem && activeElem.is(this)) {
           activeElem = null;
        }
   });
}

// Open Control Panel on return key
function openControls(currentMixer){
  $(window).on("keydown", function(event){
    if( activeElem && (event.keyCode ===13) ){
      var divId = activeElem.attr("id")
      // console.log("hovering in " + trackId)
      var $targetComb =  activeElem.find('.hex_inner')
      var targetCombText = activeElem.find('.inner-text')
        // only show controls for a track that is currently playing
        // if ( ($targetComb).hasClass("active")
           // event.stopPropagation();
          // console.log("sensing a key up inside a hover")
      setTargetForControlPanel(divId,currentMixer)
    } else {
        currentMixer.assignTarget(null);
    };
  });
};

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






