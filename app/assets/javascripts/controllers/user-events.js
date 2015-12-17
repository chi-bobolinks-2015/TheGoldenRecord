function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  removeTrack(mix);
  // controlPanelHover(mix)
  //Put in deck user event file

};



function dropTrack(mix){
  $(".cell").droppable({
    accept: ".draggableTrack",
    drop: function(event, ui) {
      console.log("New track dropped in honeycomb")
      var draggable = ui.draggable.clone();
      var divId = Number($(this).attr("id"));

      var trackId = Number(draggable.attr("id"));
      var trackTitle = draggable.text();
      var image = draggable.attr("image");
      var trackAdded = {src: draggable.attr("url"), id: trackId, name: draggable.html()}
      var innerText = $(this).find(".inner-text");
      $(innerText).removeClass("emptied");

      mix.addTrack({'urls': draggable.attr("url"), 'divId': divId})
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
    var targetId = $targetCell.attr("id")
    var drag = $targetCell.find(".inner-text");
    drag.draggable( {
      containment: ".container",
      cursor: "move"
    });

    $('.mix').droppable({
    accept: drag,
    drop: function(event, ui) {
      var innerHex = $(drag).parent().parent();
      mixer.stopTrack(targetId);
      mixer.mix[targetId] = null;
      $(drag).addClass("emptied");
      $(drag).empty();
      $(innerHex).removeClass("active");
      unloadImage(innerHex);
     }
    });
  });
}

function setTargetForControlPanel(cellId, currentMixer, event){
  console.log(cellId)
   if( event.keyCode === 13 ){
    //  assign target, show control panel
    console.log("show control panel")
    currentMixer.assignTarget(cellId);
    $(".control-panel").show();

    // Then all the dials need to be updated to reflect the attribute values of the target
      var $currentVolume= currentMixer.mix[currentMixer.target].volume();
      $("#volume-dial").val($currentVolume * 10).trigger("change");

      // var $currentPanning = currentMixer.mix[currentMixer.target]._audioNode[0].panner.setPosition(0, 0, 0);
      // $("#panning-dial").val("0") //.trigger("change");

      var $currentDelay= currentMixer.mix[currentMixer.target]._audioNode[3].delayTime.value
      $("#echo-dial").val($currentDelay * 10).trigger("change");

      var $currentTempo = currentMixer.mix[currentMixer.target]._audioNode[0].bufferSource.playbackRate.value
      $("#tempo-dial").val($currentTempo).trigger("change");

        // var $currentLoopValue = currentMixer.mix[currentMixer.target].loop
        // $("#loop-toggle").val($currentLoopValue).trigger("change");
    }else{
      currentMixer.assignTarget(null);
    };
};

function assignTrackInfoHover(cell, currentMixer, trackTitle){
    var targetCombText = $(cell).find('.inner-text')
    $(targetCombText).html(trackTitle);
}

function onHoverOptions(currentMixer){
  $(".cell").hover(function() {

    var thisCellId = Number($(this).attr("id"))
    console.log(thisCellId)
    var $targetComb =  $(this).find('.hex_inner')
    var targetCombText = $(this).find('.inner-text')

    if ( $(targetCombText).hasClass("emptied") ){
      $(targetCombText).attr('style', "position: relative;");
    } else {
      $(window).on("keyup", function(event){
        if ( ($targetComb).hasClass("active") ){
          console.log($targetComb)
            console.log(thisCellId)
          setTargetForControlPanel(thisCellId, currentMixer, event)
        };
      });
    }
  });
  // mouseExitCell
}

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
    var divId = Number($(this).attr("id"));
    mix.assignTarget(divId)
    $targetComb.hasClass("active") ? mix.playTrack(divId) : mix.stopTrack(divId);
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






