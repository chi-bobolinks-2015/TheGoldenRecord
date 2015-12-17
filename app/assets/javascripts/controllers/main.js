$(document).ready(function(event){
  $('.honeycombs').honeycombs({
    combWidth: 225,
    margin: 10
  });

  var activeMix = startMixer();
  activeMix.assignTarget
  setUserEvents(activeMix);
  setControls(activeMix);
  hideControls();
})

