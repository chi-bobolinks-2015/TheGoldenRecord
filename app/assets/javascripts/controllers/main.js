$(document).ready(function(event){
  $('.honeycombs').honeycombs({
    combWidth: 225,
    margin: 10
  });

  var activeMixer = startMixer();
  activeMixer.assignTarget
  setUserEvents(activeMixer);
  setControls(activeMixer);

});


