function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  // controlPanelHover(mix)
  //Put in deck user event file

};



function dropTrack(mix){
  $(".cell").droppable({
    accept: ".draggableTrack",
    drop: function(event, ui) {

      var draggable = ui.draggable.clone();
      var divId = Number($(this).attr("id"));


      var trackId = Number(draggable.attr("id"));
      var trackTitle = draggable.text();
      var image = draggable.attr("image");
      var trackAdded = {src: draggable.attr("url"), id: trackId, name: draggable.html()}

      mix.addTrack({'urls': draggable.attr("url"), 'divId': divId})
      trackInfoHover($(this), mix, trackTitle);
      loadImage(image, $(this));
      draggableImage();
    }
  });
}

function removeTrack(mix) {
  // NEEDS TO BE BUILT
  // $(".cell").on("click", ".boxclose", function() {
  //   var cell = $(this).parent();
  //   // cell.removeClass("on-deck");
  //   $(cell.children("p")).remove();
  //   $(cell.children("img")).remove();
  //   $(cell.children(".boxclose")).remove();
  // });
}

function setTargetForControlPanel(cellId, currentMixer, event){
   if( event.keyCode === 13 && $(".control-panel").is(":hidden") ){
    // show control panel, assign target
      $(".control-panel").show();
      currentMixer.assignTarget(cellId);
    // Then all the dials need to be updated to reflect the attribute values of the target
        var $currentVolume= currentMixer.mix[currentMixer.target].volume();
        $("#volume-dial").val($currentVolume * 10).trigger("change");

        // var $currentPanning = currentMixer.mix[currentMixer.target]._audioNode[0].panner.setPosition(0, 0, 0);
        $("#panning-dial").val("0") //.trigger("change");

        var $currentDelay= currentMixer.mix[currentMixer.target]._audioNode[3].delayTime.value
        $("#echo-dial").val($currentDelay * 10).trigger("change");

    }else if( event.keyCode === 13 && $(".control-panel").is(":visible") ){
      $(".control-panel").hide();
      currentMixer.assignTarget(null);
    }else{
      console.log("Check setTargetForControlPanel method, you aren't hitting the right conditions")
    };
};

function trackInfoHover(cell, currentMixer, trackTitle){
  $(cell).hover(function() {
    var thisCellId = Number($(this).attr("id"))
    var targetComb = $(this).find('.inner-text')
      $(targetComb).html(trackTitle);
      $(window).on("keyup", function(event){
        setTargetForControlPanel(thisCellId, currentMixer, event)
      })
    },
    mouseExitCell
    );
}

function mouseExitCell(){
  $(this).find("#track-info").remove();
}

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




function noLongerActive(sound) {
// a function that removes the class "active" when a track finishes playing on its own
}




