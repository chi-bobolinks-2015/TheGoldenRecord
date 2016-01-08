$(document).ready(function(event){
  setWelcome();
  setHexagons();

  var activeMixer = startMixer();
  activeMixer.assignTarget

  setNavHeader();
  setSidebar();
  setUserEvents(activeMixer);
  setControls(activeMixer);

  hideControls(activeMixer);
  onHoverOptions(activeMixer);
  removeTargetFromControlPanel(event);

})

