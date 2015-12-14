$(document).ready(function(event){
  // var activeMix = startMixer();
  // setUserEvents(activeMix);

  // loadSound(activeMix, 5, 1)
  // loadSound(activeMix, 6, 2)
  // var sound = new Howl({
  // 	urls: ['https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav']
  // }).play();

  // $(window).on("keyup", function(event) {
  // 	if (event.keyCode == 38) {
  // 		sound.pause();
  // 	}
  // 	else if (event.keyCode == 40) {
  // 		sound.play();
  // 	}
  // })

  // var sound2 = new Howl({
  // 	urls: ['https://s3.amazonaws.com/the-golden-record/ReginaApp-+Swing.mp3']
  // }).play();
var someMix = new Mixer
someMix.addTrack({'url' : 'https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav', 'divId' : 1})
someMix.addTrack({'url' : 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Soul+Jazz.mp3', 'divId' : 0})
someMix.addTrack({'url' : 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Swing.mp3', 'divId' : 2})
console.log(someMix.mix) 

})

