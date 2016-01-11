function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  removeTrack(mix);
};

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
  $(".cell").on("click", function() {
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
      $(innerHex).removeClass("active");
      unloadImage(innerHex);
     }
    });
  });
}

function setTargetForControlPanel(divId, currentMixer, event){
  var trackId =  convertId(divId)
  if( event.keyCode === 13 ){
    //  assign target, show control panel
    console.log("show control panel for track " + trackId)
    currentMixer.assignTarget(trackId);
    $(".control-panel").show();

    // Change color of hexagon.
    addColor(divId);

    // Then all the dials need to be updated to reflect the attribute values of the target
      var $currentVolume= currentMixer.mix[currentMixer.target].volume();
      $("#volume-dial").val($currentVolume * 10).trigger("change");

      // var $currentPanning = currentMixer.mix[currentMixer.target]._audioNode[0].panner.setPosition(0, 0, 0);
      // $("#panning-dial").val("0") //.trigger("change");

      var $currentDelay= currentMixer.mix[currentMixer.target]._audioNode[3].delayTime.value
      $("#echo-dial").val($currentDelay * 10).trigger("change");

      var currentTempo = currentMixer.mix[currentMixer.target]._audioNode[0].bufferSource.playbackRate.value
      $("#tempo-dial").val(convertPlaybackForTempoDial(currentTempo)).trigger("change");

        // var $currentLoopValue = currentMixer.mix[currentMixer.target].loop
        // $("#loop-toggle").val($currentLoopValue).trigger("change");

    }
    else {
      currentMixer.assignTarget(null);
      // $("p#track-title").remove();
    };
};

function convertPlaybackForTempoDial(integer){
// this method is the reverse of adjust playback in the mixer controller
  if (integer >= 1) {
    return (integer * 50).toFixed(2)
  } else {
    return ((integer * 100) - .5).toFixed(2)
  }
}


function addColor(divId) {
  var target = $("div#" + divId + " div.hex_l div.hex_r div.hex_inner");
  $(target).addClass("on-mixer");
};

function assignTrackInfoHover(cell, currentMixer, trackTitle){
    var targetCombText = $(cell).find('.inner-text')
    $(targetCombText).html(trackTitle);
};

function onHoverOptions(currentMixer){
  $(".cell").hover(function() {
    var divId = $(this).attr("id")

  // console.log("hovering in " + trackId)
    var $targetComb =  $(this).find('.hex_inner')
    var targetCombText = $(this).find('.inner-text')

    if ( $(targetCombText).hasClass("emptied") ){
      $(targetCombText).attr('style', "position: relative;");
    } else {
      $(window).on("keyup", function(event){
        if ( ($targetComb).hasClass("active") ){
          console.log("sensing a key up inside a hover")
          setTargetForControlPanel(divId,currentMixer, event)
        };
      });
    }
  });
  // mouseExitCell
};

// function mouseExitCell(){
//   $(this).find("#track-info").remove();
// }

function returnDivs() {
  return $('div.cell')
};

function startAndStopTrack(mix) {
  // ON CLICK - PLAY AND STOP
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

// function showTargetTrackInControlPanel(){
    // var divId = cellId.toString();
    // var trackTitle = $("div#" + divId).find(".inner-text").text();
    // $("p#track-title").remove();
    // $(".control-panel").append("<p id='track-title'>" + trackTitle + "</p>");
// }






