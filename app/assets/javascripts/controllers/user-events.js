function setUserEvents(mix){
  startAndStopTrack(mix)
  globalPause(mix);
  dropTrack(mix);
  // controlPanelHover(mix)
  //Put in deck user event file
  // changeTrackVolume(mix);

};

function dropTrack(mix){
  $(".cell").droppable({
    accept: ".draggableTrack",
    drop: function(event, ui) {

      var draggable = ui.draggable.clone();
      var divId = Number($(this).attr("id"));


      var trackId = Number(draggable.attr("id"));
      var trackTitle = draggable.text();
      var image = draggable.attr("image");
      var trackAdded = {src: draggable.attr("url"), id: trackId, name: draggable.html()}

      mix.addTrack({'urls': draggable.attr("url"), 'divId': divId})
      trackInfoHover($(this), mix, trackTitle);
      loadImage(image, $(this));
      draggableImage();
    }
  });
}

function trackInfoHover(cell, mix, trackTitle){
  $(cell).hover(function() {
    var thisCellId = Number($(this).attr("id"))
    var targetComb = $(this).find('.inner-text')
      $(targetComb).html(trackTitle);
      $(window).on("keyup", function(e){

        if(e.keyCode === 69) {
          mix.assignTarget(thisCellId);
          console.log(mix[target].volume)
        }
      })
    },
    mouseExitCell
    );
}

function mouseExitCell(){
  $(this).find("#track-info").remove();
}

function returnDivs() {
  return $('div.cell')
};

function startAndStopTrack(mix) {

  // ON CLICK - PLAY AND STOP
  // returnDivs().on('click', controlBoard.togglePlay.bind(controlBoard));
  returnDivs().on('click', function(e){
    var $targetComb =  $(this).find('.hex_inner')
    $targetComb.toggleClass('active');
    var divId = Number($(this).attr("id"));
    $targetComb.hasClass("active") ? mix.playTrack(divId) : mix.stopTrack(divId);
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


function removeFromMixer(trackId) {
  // NEEDS TO BE BUILT
  // $(".cell").on("click", ".boxclose", function() {
  //   var cell = $(this).parent();
  //   sounds = _.reject(sounds, function(sound){
  //     return sound.id === trackId;
  //   });
  //   // cell.removeClass("on-deck");
  //   $(cell.children("p")).remove();
  //   $(cell.children("img")).remove();
  //   $(cell.children(".boxclose")).remove();
  // });
}

// ON DRAG -LOAD AND REMOVE FILES FROM MIXER
function addToMixer(){
// when dragged to mixer, load sound and assign to div
// loadSound(activeMix, trackId, divId)
};

function addToDeck(){
// when dragged to deck, enable effects
// only one item on Deck at a time
// if there is a track there already
// replace it
};





function noLongerActive(sound) {
// a function that removes the class "active" when a track finishes playing on its own
}




