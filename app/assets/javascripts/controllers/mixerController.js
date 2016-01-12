function startMixer(){
  return new Mixer
}

function convertId(div){
 var DIV_TO_TRACK_IDS =
  {
    'A' : 1,
    'B' : 2,
    'C' : 3,
    'D' : 4,
    'E' : 5,
    'F' : 6
  };
  return DIV_TO_TRACK_IDS[div]
};




