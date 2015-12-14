$(document).ready(function(event){
  $('.honeycombs').honeycombs({
    combWidth: 225,
    margin: 10
  });

  startMixer();
  // var activeMix = startMixer();
  // setUserEvents(activeMix);

  // loadSound(activeMix, 5, 1)
  // loadSound(activeMix, 6, 2)
  // var sound = new Howl({
  // 	urls: ['https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav']
  // }).play();
  // console.log(sound)
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

// var someMix = new Mixer
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav', 'divId': 1})
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Soul+Jazz.mp3', 'divId': 0})
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Swing.mp3', 'divId': 2})
// console.log(someMix.mix)
// someMix.removeTrack(1)
// console.log(someMix.mix)


 // $(window).on("keyup", function(event) {
 //  	if (event.keyCode == 38) {
 //  		someMix.globalPlay();
 //  		console.log("play")
 //  	}
 //  	else if (event.keyCode == 40) {
 //  		someMix.globalPause();
 //  	}
 //  })

// var someMix = new Mixer
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav', 'divId': 1})
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Soul+Jazz.mp3', 'divId': 0})
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Swing.mp3', 'divId': 2})
// console.log(someMix.mix)
// // console.log(someMix)
// someMix.assignTarget(1)
// // someMix.assignTargetVolume(.5)
// console.log(someMix.mix)
// // someMix.removeTrack(1)
// console.log(someMix)


//  $(window).on("keyup", function(event) {
//   	if (event.keyCode == 38) {
//   		someMix.pauseTarget();
//   		console.log("pause")
//   	}
//   	else if (event.keyCode == 40) {
//   		someMix.playTarget();
//       console.log("play")
//   	}
//   })


//   var activeMix = startMixer();
//   setUserEvents(activeMix);
//   setControls(activeMix);

  // loadSound(activeMix, 5, 1)
  // loadSound(activeMix, 6, 2)

})

