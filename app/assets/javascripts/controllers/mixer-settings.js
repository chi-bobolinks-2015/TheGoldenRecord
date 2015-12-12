// ***************** Basic Mixer Settings ***********************
function startMixer(){
  var activeMix = new Wad.Poly({
  })
  return activeMix
}

function loadSound(mix, trackId, divId) {
  //var tracktoAdd =  eventually this will look up track from server based on id
  var trackSource = _.find(sounds, function(sound) { return sound.id === trackId })

    var trackToAdd = new Wad({
      source: trackSource.src,
      env: {hold: 9001}
    });
    mix.add(trackToAdd)
    mostRecent = _.last(mix.wads)
    mostRecent.label = divId
    $span = $("#" + divId).find("span")
    $span.append("<p> loaded </p>")
    $span.append("<p>" + trackSource.src +"</p>")
}

var sounds = [
    {src: "/assets/fire.wav", id: 1},
    {src: "/assets/forest.wav", id: 2},
    {src: "/assets/lightning.wav", id: 3},
    {src: "/assets/nightime.wav", id: 4},
    {src: "/assets/beach.wav", id: 5},
     {src: "/assets/hotlineBling.mp3", id: 6}
  ];
