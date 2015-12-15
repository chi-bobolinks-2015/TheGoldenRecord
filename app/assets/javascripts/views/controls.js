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


function moveSlider(htmlId){
  $(window).load(function(event){
    // console.log("Inside of moveSlider")
    $("#" + htmlId).slider({
    value: 60,
    orientation: "horizontal",
    range: "min",
    animate: true
    });
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

    $("#panning-dial").val(current_value)

    $("#panning-dial").knob({
    'min': -2,
    'max': 2,
    'step': .5,
    'angleOffset': -125,
    'angleArc': 250,
    'width': 75,
    'fgColor':  "#222222",
    'skin': "tron",
    'thickness': .2,
    'displayPrevious': true,
    'displayInput': true
    });
  });
}

// get these working with percentages
function moveHighPassDial(current_value){
  $(window).load(function(event){
    // console.log("Inside of moveDial")
    $("#high-pass-dial").val(current_value)

    $("#high-pass-dial").knob({
    'min': 0,
    'max': 100,
    'step': 5,
    'width': 300,
    'height': 300,
    'fgColor': "#E18303",
    'skin': "tron",
    'thickness': .3,
    'displayPrevious': false,
    'displayInput': false
    });
  });
}

function moveLowPassDial(current_value){
  $(window).load(function(event){
    // console.log("Inside of moveDial")

    $("#low-pass-dial").val(current_value)

    $("#low-pass-dial").knob({
    'min': 0,
    'max': 100,
    'step': 5,
    'width': 200,
    'height': 200,
    'fgColor': "#E18303",
    'skin': "tron",
    'thickness': .45,
    'displayPrevious': false,
    'displayInput': false,
    'rotation': -1
    });

  });
}


// 'release' : function (v) { /*make something*/ }
