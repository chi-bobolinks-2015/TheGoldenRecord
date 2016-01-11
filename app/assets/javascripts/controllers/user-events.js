function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  removeTrack(mix);
};

function dropTrack(mix){
  $(".cell").droppable({
    accept: ".draggableTrack",
    drop: function(event, ui) {
      console.log("New track dropped in honeycomb")
      var draggable = ui.draggable.clone();
      var divId = $(this).attr("id");

      var trackId = convertId(divId);
      var trackTitle = draggable.text();
      var image = draggable.attr("image");
      var trackAdded = {src: draggable.attr("url"), id: trackId, name: draggable.html()}
      var innerText = $(this).find(".inner-text");
      $(innerText).removeClass("emptied");

      mix.addTrack({'urls': draggable.attr("url"), 'divId': trackId})
      assignTrackInfoHover($(this), mix, trackTitle);
      loadImage(image, $(this));

    }
  });
}

function draggableMixText(cell) {
  var text = $(cell).find(".inner-text");
  console.log(text)
  $(text).draggable({
    containment: ".container",
    cursor: "move",
    snap: ".sidebar"
  });
}

function removeTrack(mixer) {
  $(".cell").on("click", function() {
    var $targetCell = $(this);
    var divId = $targetCell.attr("id")
    var trackId = convertId(divId);
    var drag = $targetCell.find(".inner-text");
    drag.draggable( {
      containment: ".container",
      cursor: "move"
    });

    $('.mix').droppable({
    accept: drag,
    drop: function(event, ui) {
      var innerHex = $(drag).parent().parent();
      mixer.stopTrack(trackId);
      mixer.removeTrack(trackId);
      $(drag).addClass("emptied");
      $(drag).empty();
      $(innerHex).removeClass("active");
      unloadImage(innerHex);
     }
    });
  });
}


function addColor(divId) {
  var target = $("div#" + divId + " div.hex_l div.hex_r div.hex_inner");
  $(target).addClass("on-mixer");
};

function assignTrackInfoHover(cell, currentMixer, trackTitle){
    var targetCombText = $(cell).find('.inner-text')
    $(targetCombText).html(trackTitle);
};

function onHoverOptions(currentMixer){
  $(".cell").hover(function() {
    var divId = $(this).attr("id")

  // console.log("hovering in " + trackId)
    var $targetComb =  $(this).find('.hex_inner')
    var targetCombText = $(this).find('.inner-text')

    if ( $(targetCombText).hasClass("emptied") ){
      $(targetCombText).attr('style', "position: relative;");
    } else {
      $(window).on("keyup", function(event){
        if ( ($targetComb).hasClass("active") ){
          console.log("sensing a key up inside a hover")
          setTargetForControlPanel(divId,currentMixer, event)
        };
      });
    }
  });
  // mouseExitCell
};

// function mouseExitCell(){
//   $(this).find("#track-info").remove();
// }

function returnDivs() {
  return $('div.cell')
};

function startAndStopTrack(mix) {
  // ON CLICK - PLAY AND STOP
  // returnDivs().on('click', controlBoard.togglePlay.bind(controlBoard));
  returnDivs().on('click', function(e){
    var $targetComb =  $(this).find('.hex_inner')
    $targetComb.toggleClass('active');
    var divId = $(this).attr("id")
    var trackId = convertId(divId);
    mix.assignTarget(trackId)
    $targetComb.hasClass("active") ? mix.playTrack(trackId) : mix.stopTrack(trackId);
  });
}


function globalPause(mix) {
 $(window).on('keyup', function(e) {
    e.preventDefault();
    if(e.keyCode == 32) {
      if(mix.pause === false) {
        mix.globalPause();
      } else {
        mix.globalPlay();
      }

    };
  });
}

// function showTargetTrackInControlPanel(){
    // var divId = cellId.toString();
    // var trackTitle = $("div#" + divId).find(".inner-text").text();
    // $("p#track-title").remove();
    // $(".control-panel").append("<p id='track-title'>" + trackTitle + "</p>");
// }






