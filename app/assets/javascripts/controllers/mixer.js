function startMixer(){
  return new Mixer
}



// function loadSound(mix, trackId, divId) {
//   //var tracktoAdd =  eventually this will look up track from server based on id

//   var trackSource = _.find(sounds, function(sound) {
//     return sound.id === trackId
//   });

//   var trackToAdd = new Wad({
//     source: trackSource.src,
//     env: {hold: 9001}
//   });

//   mix.add(trackToAdd);
//   mostRecent = _.last(mix.wads);
//   mostRecent.label = divId;

//   var targetDiv = _.find($("div"), function(div) {
//     return Number($(div).attr("id")) === divId;
//   });

//   $(targetDiv).append("<p>" + trackSource.name + "</p>")
//   $(targetDiv).attr("track-id", trackId)
// }

// var sounds = [];
