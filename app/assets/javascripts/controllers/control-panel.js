// refactoring- all control panel disabled when there is no target
// disabled mouse scroll manipulation

function setControls(mix){
  // eventually each of the moveSlider methods could take in 2 parameters, the first is the divID, the second would be the soundID
  moveVolumeDial(mix);
  movePanningDial(mix);
  moveEchoDial(mix);
  moveTempoDial(mix);
  loopToggle(mix);
  $(".control-panel").hide();
}

function hideControls(){
  $(document).mouseup(function (e){
    var container = $(".control-panel");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
  });
}
