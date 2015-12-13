function setUserEvents(mix){
  startAndStopTrack(mix)
  pauseMix(mix);
  changeTrackVolume(mix);
  dropTrack(mix);
  moveSlider();
};

function dropTrack(mix){
  $(".cell").droppable({
    drop: function(event, ui) {
      var draggable = ui.draggable.clone();
      // console.log("The track with " + draggable.attr("url") + "  ---- " + draggable.attr("id"));
      var trackId = Number(draggable.attr("id"));
      var divId = Number($(this).attr("id"));
      var trackAdded = {src: draggable.attr("url"), id: trackId, name: draggable.html()}
      sounds.push(trackAdded);
      loadSound(mix, trackId, divId);
    }
  });
}

function returnDivs() {
   return $('div.cell')
  };

function startAndStopTrack(mix) {

  // ON CLICK - PLAY AND STOP
  returnDivs().on('click', function(e) {
    e.preventDefault();

    var $targetDiv   = $(this)
    var soundId = $targetDiv.attr("id")

    $targetDiv.toggleClass('active');

    if($targetDiv.hasClass('active')){
      // IF HTML HAS CLASS "ACTIVE", PLAY SOUND
      var targetSound = _.find(mix.wads, function(wad) { return wad.label === Number(soundId) })
      targetSound.play();
      // targetSound.addEventListener("complete", changeColor) -- this is for making sounds that have stopped remove class "active"
    }else{
      //IF HTML DOESN'T HAVE CLASS "ACTIVE", STOP SOUND
      var targetSound = _.find(mix.wads, function(wad) { return wad.label === Number(soundId) })
      targetSound.stop();
    };
  });
}


function pauseMix(mix) {
  // console.log( "running pause");
 $(window).on('keyup', function(e) {
  // console.log( "In Keyup");

    e.preventDefault();
    if(e.keyCode == 32) {

      if(Wad.audioContext.state === "suspended"){
        // IF AUDIO HAS STATE PAUSED: TRUE, RESUME SOUND
        $('div.active').removeClass('paused')
        console.log("Paused: TRUE; Resuming Sound")
        Wad.audioContext.resume();

      }else{
        // IF AUDIO HAS STATE PAUSED: FALSE, SUSPEND SOUND
        $('div.active').addClass('paused')
        console.log("Paused: FALSE; Suspending Sound")
        Wad.audioContext.suspend();
      };
    };
  });
}

function moveSlider(){
  $(window).load(function(event){
    console.log("Inside of move slider")
    $("#volume-slider").slider({
    value: 60,
    orientation: "horizontal",
    range: "min",
    animate: true
    });
  });
}

function changeTrackVolume(mix) {
  $(window).on("keyup", function(event) {
    event.preventDefault();

    var $targetDiv   = $("div.on-deck")
    var soundId = $targetDiv.attr("id")

    var targetSound = _.find(mix.wads, function(wad) { return wad.label === Number(soundId) })

    if(event.keyCode == 38 && targetSound.volume < 4) {
      // increase volume
      console.log("Increase Volume")
      // targetSound.setVolume(targetSound.volume + .5)
      targetSound.defaultVolume = 4
      Wad.nodes.push
    } else if (event.keyCode == 40 && targetSound.volume > 1) {
      // decrease volume
      console.log("Decrease Volume")
      targetSound.setVolume(targetSound.volume - .5)
    }

  });
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







function changeColor(sound) {
//    var link = sound.currentTarget.src;
//    var sound = sounds.filter( function(el){return assetPath + el.src == link});
//     $("#" + sound[0].id).find("a").removeClass('clicked');
}




