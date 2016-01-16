
// ############### set up dials ###############

function moveVolumeDial(currentMixer){
    $("#volume-dial").knob({
      'min': -1,
      'max': 11,
      'step': 1,
      'width': 75,
      'fgColor': "#222222",
      'skin': "tron",
      'thickness': .2,
      'displayPrevious': true,
      'displayInput': false,
      'change': function() { currentMixer.assignTargetVolume((this.$.val()/10)); }
    });
}

function moveEchoDial(currentMixer){
    $("#echo-dial").knob({
    'min': -1,
    'max': 11,
    'step': 1,
    'cursor': 30,
    'angleOffset': -125,
    'angleArc': 250,
    'width': 75,
    'fgColor': "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': false,
    'change': function() { currentMixer.assignDelayTime((this.$.val()/10));}
    });
}

function moveTempoDial(currentMixer){
    $("#tempo-dial").knob({
    'min': 2,
    'max': 100,
    'step': 1,
    'width': 75,
    'fgColor': "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': false,
    'change': function() { currentMixer.assignPlaybackRate(currentMixer.adjustPlayback((this.$.val()))); }
    });
}


function movePanningDial(currentMixer){
    var panningDial = $("#panning-dial")
    var selectedValue;
    panningDial.Segment();
    $('.control-panel').on("click", panningDial, function() {

      selectedValue = $(".option.active").attr("value");

      currentMixer.assignPanning(Number(selectedValue));
    });
}

// function loopToggle(currentMixer){
//   $(window).load(function(event){
//     var looper = $("#loop-toggle");
//     var selectedValue;
//       looper.Segment();

//       // selectedValue = looper.children(".option.active"))
//     // $(document).on("click", looper, function(){

//       selectedValue = looper.children(".option.active");


//   //   $(".container").change("#loop-toggle", function(){

//   //     // selectedValue = $(".option.active").attr("value");
//   //     // console.log("This")
//   //     // console.log(selectedValue);
//   //     // event.preventDefault();
//   //     currentMixer.toggleLoop();
//   //     // console.log(looper);
//   //     // console.log(looper.children());
//   //     // console.log(looper.children(".option.active"));
//   //     console.log(currentMixer.mix[currentMixer.target]._audioNode[0].bufferSource.loop)
//   //   })
//   // });

// }

// function moveHighDial(current_value){
//   $(window).load(function(event){
//     // console.log("Inside of moveDial")

//     $("#high-dial").knob({
//     'min': -1,
//     'max': 11,
//     'step': 1,
//     'width': 75,
//     'fgColor': "#222222",
//     'skin': "tron",
//     'thickness': .2,
//     'displayPrevious': true,
//     'displayInput': false,
//     'change': function() { currentMixer.assignDelayTime((this.$.val()/5)); }
//     });
//   });
// }

// function moveLowDial(current_value){
//   $(window).load(function(event){
//     // console.log("Inside of moveDial")

//     $("#low-dial").knob({
//     'min': -1,
//     'max': 11,
//     'step': 1,
//     'width': 75,
//     'fgColor': "#222222",
//     'skin': "tron",
//     'thickness': .2,
//     'displayPrevious': true,
//     'displayInput': false
//     // 'change': function() { currentMixer.assignTargetVolume((this.$.val()/10)); }
//     });

//   });
// }





// 'release' : function (v) { /*make something*/ }
