function setUserEvents(mix){
  startAndStopTrack(mix)
  pauseMix(mix);
};

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




// ON DRAG -LOAD AND REMOVE FILES FROM MIXER
function addToMixer(){
// when dragged to mixer, load sound and assign to div
// loadSound(activeMix, trackId, divId)
};

function addToDeck(){
// when dragged to deck, enable effects
};











// function loadSound() {
//   createjs.Sound.registerSounds(sounds, assetPath);
// }

// function changeColor(sound) {
//    var link = sound.currentTarget.src;
//    var sound = sounds.filter( function(el){return assetPath + el.src == link});
//     $("#" + sound[0].id).find("a").removeClass('clicked');
//   }

//

// function stopSound(soundID) {
//   createjs.Sound.stop(soundID);
// }

// $(document).ready(function(){
//   loadSound();
//   setMouseEvents();
// });




