// refactoring- all control panel disabled when there is no target
// disabled mouse scroll manipulation

function setControls(mix){
  // eventually each of the moveSlider methods could take in 2 parameters, the first is the divID, the second would be the soundID
  moveVolumeDial(mix);
  movePanningDial(mix);
  moveEchoDial(mix);
  moveTempoDial(mix);
  $(".control-panel").hide();
}
