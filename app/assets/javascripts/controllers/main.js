$(document).ready(function(event){

  $('.honeycombs').honeycombs({
    combWidth: 225,
    margin: 10
  });

  var activeMixer = startMixer();
  activeMixer.assignTarget

  setSidebar();
  setUserEvents(activeMixer);
  setControls(activeMixer);

  hideControls();
  onHoverOptions(activeMixer)
})

