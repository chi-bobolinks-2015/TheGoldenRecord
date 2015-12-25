// $(document).ready(function () {


// // // DRIVER CODE
// var someMix = new Mixer
// someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/Music/Soul+Jazz-Mike+Frederick.mp3', 'divId': 0})
// // console.log(someMix.mix)
// // someMix.assignTarget(0)
// var context = someMix.trackContext(0)
// // console.log(context)

// // //creating new Tuna object
// // var tuna = new Tuna(context)



// // //creating a new overdrive node
// // // var overdrive = new tuna.Overdrive({
// // //     outputGain: 1,         //0 to 1+
// // //     drive: .2,              //0 to 1
// // //     curveAmount: 1,          //0 to 1
// // //     algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
// // //     bypass: 0
// // // });

// // // var delay = new tuna.Delay({
// // //     feedback: 0.5,    //0 to 1+
// // //     delayTime: 150,    //how many milliseconds should the wet signal be delayed?
// // //     wetLevel: 0.5,    //0 to 1+
// // //     dryLevel: 1,       //0 to 1+
// // //     cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
// // //     bypass: 0
// // // });

// // // var convolver = new tuna.Convolver({
// // //     highCut: 22050,                         //20 to 22050
// // //     lowCut: 20,                             //20 to 22050
// // //     dryLevel: 1,                            //0 to 1+
// // //     wetLevel: 1,                            //0 to 1+
// // //     level: 1,                               //0 to 1+, adjusts total output of both wet and dry
// // //     impulse: "/assets/Large\ Long\ Echo\ Hall.wav",    //the path to your impulse response
// // //     bypass: 0
// // // });

// // // DRIVER CODE
// // var someMix = new Mixer
// // someMix.addTrack({'urls': 'https://s3.amazonaws.com/the-golden-record/Music/Soul+Jazz-Mike+Frederick.mp3', 'divId': 0})
// // console.log(someMix.mix)
// // someMix.assignTarget(0)
// // var context = someMix.trackContext(0)
// // console.log(context)

// // //creating new Tuna object
// // var tuna = new Tuna(context)



// // //creating a new overdrive node
// // // var overdrive = new tuna.Overdrive({
// // //     outputGain: 1,         //0 to 1+
// // //     drive: .2,              //0 to 1
// // //     curveAmount: 1,          //0 to 1
// // //     algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
// // //     bypass: 0
// // // });

// // // var delay = new tuna.Delay({
// // //     feedback: 0.5,    //0 to 1+
// // //     delayTime: 150,    //how many milliseconds should the wet signal be delayed?
// // //     wetLevel: 0.5,    //0 to 1+
// // //     dryLevel: 1,       //0 to 1+
// // //     cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
// // //     bypass: 0
// // // });

// // // var convolver = new tuna.Convolver({
// // //     highCut: 22050,                         //20 to 22050
// // //     lowCut: 20,                             //20 to 22050
// // //     dryLevel: 1,                            //0 to 1+
// // //     wetLevel: 1,                            //0 to 1+
// // //     level: 1,                               //0 to 1+, adjusts total output of both wet and dry
// // //     impulse: "/assets/Large\ Long\ Echo\ Hall.wav",    //the path to your impulse response
// // //     bypass: 0
// // // });

// // // var delay = new tuna.Delay({
// // //     feedback: .5,    //0 to 1+
// // //     delayTime: 500,    //how many milliseconds should the wet signal be delayed?
// // //     wetLevel: .5,    //0 to 1+
// // //     dryLevel: 1,       //0 to 1+
// // //     cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
// // //     bypass: 0
// // // });

// // //assigning an input source for the overdrive node
// // var input = someMix.mix[0]._audioNode[0]

// // //setting input
// // // input.connect(overdrive);
// // // input.connect(moog);

// // //assigning an output for the overdrive node
// // var output = context.destination;

// // //setting output
// // // overdrive.connect(output);
// // // moog.connect(output);

// // // console.log(someMix.mix)
// // // console.log(delay)

// // // console.log(window.AudioContext)


// //  $(window).on("keyup", function(event) {

// //     if (event.keyCode == 38) {
// //       console.log("play")
// //       someMix.globalPlay();
// //     }
// //     else if (event.keyCode == 40) {
// //       someMix.assignFilter("lowpass")
// //       console.log("effect")
// //     }
// //   })

// // })
// // // var delay = new tuna.Delay({
// // //     feedback: .5,    //0 to 1+
// // //     delayTime: 500,    //how many milliseconds should the wet signal be delayed?
// // //     wetLevel: .5,    //0 to 1+
// // //     dryLevel: 1,       //0 to 1+
// // //     cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
// // //     bypass: 0
// // // });

// // //assigning an input source for the overdrive node
// // var input = someMix.mix[0]._audioNode[0]

// // //setting input
// // // input.connect(overdrive);
// // // input.connect(moog);

// // //assigning an output for the overdrive node
// // var output = context.destination;

// // //setting output
// // // overdrive.connect(output);
// // // moog.connect(output);

// // // console.log(someMix.mix)
// // // console.log(delay)

// // // console.log(window.AudioContext)


//  // $(window).on("keyup", function(event) {

//  	// for (var i = 1; i < 100; i++) {
//  	// 	var log = someMix.adjustPlayback(i);
//  	// 	console.log(i + ": " + log)
//  	// }

//  //    if (event.keyCode == 38) {
//  //      console.log("play")
//  //      someMix.globalPlay();
//  //      console.log(someMix.assignPanning(1))
//  //    }
//  //    else if (event.keyCode == 40) {
//  //      console.log(someMix.assignPanning(.25))
//  //      console.log("effect")
//  //    }
//  //  })

// })
