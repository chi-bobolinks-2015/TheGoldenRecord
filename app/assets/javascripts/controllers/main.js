$(document).ready(function(event){
  $('.honeycombs').honeycombs({
    combWidth: 225,
    margin: 10
  });

  var activeMix = startMixer();
  setUserEvents(activeMix);

  // var sound2 = new Howl({
  // 	urls: ['https://s3.amazonaws.com/the-golden-record/ReginaApp-+Swing.mp3']
  // }).play();

var someMix = new Mixer
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav', 'divId': 1})
someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Soul+Jazz.mp3', 'divId': 0})
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/ReginaApp-+Swing.mp3', 'divId': 2})
console.log(someMix.mix)
someMix.assignTarget(0)
console.log(someMix.targetContext())


//setting context
var context = someMix.mix[0]._audioNode[0].context

//creating new Tuna object
var tuna = new Tuna(context)

//creating a new overdrive node
var overdrive = new tuna.Overdrive({
    outputGain: 1,         //0 to 1+
    drive: .2,              //0 to 1
    curveAmount: 1,          //0 to 1
    algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
    bypass: 0
});

// var delay = new tuna.Delay({
//     feedback: 0.5,    //0 to 1+
//     delayTime: 150,    //how many milliseconds should the wet signal be delayed?
//     wetLevel: 0.5,    //0 to 1+
//     dryLevel: 1,       //0 to 1+
//     cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
//     bypass: 0
// });


//assigning an input source for the overdrive node
var input = someMix.mix[0]._audioNode[0]

//setting input
input.connect(overdrive);
// input.connect(delay);

//assigning an output for the overdrive node
var output = context.destination;

//setting output
overdrive.connect(output);
// delay.connect(output);

console.log(someMix.mix)
console.log(overdrive)
console.log(context)

// console.log(window.AudioContext)


 $(window).on("keyup", function(event) {
  	if (event.keyCode == 38) {
  		someMix.globalPlay();
  		console.log("play")
  	}
  	else if (event.keyCode == 40) {
  		someMix.globalPause();
      console.log("pause")
  	}
  })

})

