function loadImage(imageUrl, cell){
  // $(cell).append("<img src=" + imageUrl + " class='mixer-image'>");
  // $(cell).append("<a class='boxclose'></a>");

  $(cell).find("img").map(function() {return $(this).attr("src", imageUrl)});

  $(this).each(function(){
    var css = 'url("'+imageUrl+'") ';
    $(cell).find('.hex_inner').attr('style', 'width: 225px; height: 194.856px; background-image: ' + css);
    // This is where you add background color.
  });
}

function draggableImage(){
  $(".mixer-image").draggable({
    containment: ".container",
    snap: ".deck",
    helper: "clone"
  });
}


function moveVolumeDial(currentMixer){

  $(window).load(function(event){
    // starting value of knob set in relation to target in setTargetForControlPanel() method
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

  });
}

function movePanningDial(current_value){
  $(window).load(function(event){

    $("#panning-dial").knob({
    'min': -2,
    'max': 2,
    'step': .5,
    'cursor': 13,
    'angleOffset': -125,
    'angleArc': 250,
    'width': 75,
    'fgColor':  "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': true
    // 'change': function() { currentMixer.assignTargetVolume((this.$.val()/10)); }
    });
  });
}


function moveHighDial(current_value){
  $(window).load(function(event){
    // console.log("Inside of moveDial")

    $("#high-dial").knob({
    'min': -1,
    'max': 11,
    'step': 1,
    'width': 75,
    'fgColor': "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': false,
    'change': function() { currentMixer.assignDelayTime((this.$.val()/5)); }
    });
  });
}

function moveLowDial(current_value){
  $(window).load(function(event){
    // console.log("Inside of moveDial")

    $("#low-dial").knob({
    'min': -1,
    'max': 11,
    'step': 1,
    'width': 75,
    'fgColor': "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': false
    // 'change': function() { currentMixer.assignTargetVolume((this.$.val()/10)); }
    });

  });
}

function moveEchoDial(currentMixer){
  $(window).load(function(event){
    // console.log("Inside of moveDial")

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
    'change': function() {
      console.log(currentMixer.mix[currentMixer.target]._audioNode[3].delayTime.value);
      currentMixer.assignDelayTime((this.$.val()/10));
      console.log("After: " + (this.$.val()/10));
    }
    });
  });
}

function moveTempoDial(current_value){
  $(window).load(function(event){
    // console.log("Inside of moveDial")

    $("#tempo-dial").knob({
    'min': -1,
    'max': 11,
    'step': 1,
    'width': 75,
    'fgColor': "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': false
    // 'change': function() { currentMixer.assignTargetVolume((this.$.val()/10)); }
    });
  });
}



// 'release' : function (v) { /*make something*/ }
