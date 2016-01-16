function setControls(mix){
  moveVolumeDial(mix);
  movePanningDial(mix);
  moveEchoDial(mix);
  moveTempoDial(mix);
  // loopToggle(mix);
  $(".control-panel").hide();
}

// Hide control panel and unassign target when not in use
function hideControls(currentMixer){
  $(document).mouseup(function (e){
    var container = $(".control-panel");

    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
        currentMixer.assignTarget(null);
        $("div").removeClass("on-mixer");
         $("p#track-title").remove();
    }
  });
}

// Assign target and show control panel, called by onHoverOptions method
function setTargetForControlPanel(divId, currentMixer){
  var trackId =  convertId(divId)

  console.log("show control panel for track " + trackId)

  currentMixer.assignTarget(trackId);
  $(".control-panel").show();
  addColor(divId);
  updateDials(currentMixer);
};

// Update dials with current level of target track
function updateDials(currentMixer){
      var currentVolume= currentMixer.mix[currentMixer.target].volume();
      $("#volume-dial").val(currentVolume * 10).trigger("change");

      var currentDelay= currentMixer.mix[currentMixer.target]._audioNode[3].delayTime.value
      $("#echo-dial").val(currentDelay * 10).trigger("change");

      var currentTempo = currentMixer.mix[currentMixer.target]._audioNode[0].bufferSource.playbackRate.value
      $("#tempo-dial").val(adjustTempoDial(currentTempo)).trigger("change");

        // var $currentLoopValue = currentMixer.mix[currentMixer.target].loop
        // $("#loop-toggle").val($currentLoopValue).trigger("change");

}

// Adjust playback level to valid tempo dial input (reverse of adjustPlayback method)
function adjustTempoDial(integer){
  if (integer >= 1) {
    return (integer * 50).toFixed(2)
  } else {
    return ((integer * 100) - .5).toFixed(2)
  }
}

