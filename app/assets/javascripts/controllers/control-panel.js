function setControls(mix){
  // eventually each of the moveSlider methods could take in 2 parameters, the first is the divID, the second would be the soundID
  moveSlider("volume-slider");
  moveSlider("pitch-slider");
  moveSlider("tempo-slider");
  movePanningDial(0);
  moveHighPassDial(98);
  moveLowPassDial(98);
}