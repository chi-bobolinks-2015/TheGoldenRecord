var Mixer = function () {
	this.mix = []
	this.target
	this.pause = false
}

// ############### TRACK METHODS ##################

//Adds a track to the mix. Takes args = {urls: sound.aws.com, divId: 1}
Mixer.prototype.addTrack = function (args) {
	var newTrack = new Howl({
		urls: [args['urls']],
		volume: 0.5
	});
	var trackID = args['divId']
	newTrack.on("end", function(){
		var targetComb = $("div#" + trackID + " div.hex_l div.hex_r div.hex_inner.active");
		targetComb.toggleClass("active");
	})
	this.mix[trackID] = newTrack;
	this.buildEffects(trackID);
}

//Removes a track from the mix array
Mixer.prototype.removeTrack = function (position) {
	this.mix[position] = null;
}


//Plays a track from the mix array
Mixer.prototype.playTrack = function (trackID) {
	this.mix[trackID].play();
}

//Pauses a track from the mix array
Mixer.prototype.pauseTrack = function (trackID) {
	this.mix[trackID].pause();
}

//Stops a track from the mix array
Mixer.prototype.stopTrack = function (trackID) {
	this.mix[trackID].stop();
}

Mixer.prototype.trackContext = function (trackID) {
	return this.mix[trackID]._audioNode[0].context
}

// ############### BUILD FILTER METHODS ##################

//Build effects structure
Mixer.prototype.buildEffects = function (trackID) {

	//Set context
	var context = this.trackContext(trackID)

	//create Tuna object for the track
	var tuna = new Tuna(context)

	//Put context/tuna into an object
	var tunaParams = {'tuna' : tuna, 'context' : context}
	
	//Build Tuna effect nodes
	var filter = this.buildFilter(tunaParams)
	var convolver = this.buildConvolver(tunaParams)
	var reverb = this.buildReverb(tunaParams)

	//Point at the gainNode created in our new Howl
	var input = this.mix[trackID]._audioNode[0]

	//Set output destination to our context destination(speakers)
	var output = context.destination

	//Connect the nodes
	input.connect(filter)
	filter.connect(convolver)
	convolver.connect(reverb)
	reverb.connect(output)

	//Push effects into _audioNode array for future manipulation
	this.mix[trackID]._audioNode.push(filter)
	this.mix[trackID]._audioNode.push(convolver)
	this.mix[trackID]._audioNode.push(reverb)

}

//Create new tuna.Filter
Mixer.prototype.buildFilter = function (params) {

	//Set variables for new effect from params
	var tuna = params['tuna']
	var context = params['context']

	//Create new filter effect
	var filter = new tuna.Filter({
    frequency: 20, //20 to 22050
    Q: 20, //0.001 to 100
    gain: 0, //-40 to 40
    filterType: "allpass", //lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
    bypass: 0
	});

	//Return the filter
	return filter
}

//Create new tuna.convolver(echo)
Mixer.prototype.buildConvolver = function (params) {

	//Set variables for new effect from params
	var tuna = params['tuna']
	var context = params['context']

	//Call Convolver method on tuna
	var convolver = new tuna.Convolver({
    highCut: 22050,                         //20 to 22050
    lowCut: 20,                             //20 to 22050
    dryLevel: 1,                            //0 to 1+
    wetLevel: 1,                            //0 to 1+
    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
    impulse: "https://s3.amazonaws.com/the-golden-record/Sound+Effects/impulseResponse.wav",    //the path to your impulse response
    bypass: 0
	});

	//Return the convolver
	return convolver
}

//Create new tuna.convolver(echo)
Mixer.prototype.buildReverb = function (params) {

	//Set variables for new effect from params
	var tuna = params['tuna']
	var context = params['context']

	//Call Convolver method on tuna
	var delay = new tuna.Delay({
	  feedback: 0.5,    //0 to 1+
	  delayTime: 0,    //how many milliseconds should the wet signal be delayed?
	  wetLevel: 2,    //0 to 1+
	  dryLevel: 1,       //0 to 1+
	  cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
	  bypass: 0
	});

	//Return the convolver
	return delay
}

// ############### GLOBAL METHODS ##################

//Plays all items in mix array
Mixer.prototype.globalPlay = function () {
	for (var i = 0; i < 6; i++) {
		if (this.mix[i] != null) {
			this.mix[i].pause()
			this.mix[i].play()
		}
	}
	this.pause = false
}

//Pauses all items in mix array
Mixer.prototype.globalPause = function () {
	for (var i = 0; i < 6; i++) {
		if (this.mix[i] != null) {
			this.mix[i].pause()
		}
	}
	this.pause = true
}

// ############### BASIC TARGET METHODS ##################

//Sets target for later manipulation(ie. volume, filter)
Mixer.prototype.assignTarget = function (position) {
	this.target = position
}


//Assigns target volume
Mixer.prototype.assignTargetVolume = function (volumeLevel) {
	this.mix[this.target].volume(volumeLevel)
}

//Pause target
Mixer.prototype.pauseTarget = function () {
	this.mix[this.target].pause()
}

//Play target
Mixer.prototype.playTarget = function () {
	this.mix[this.target].pause()
	this.mix[this.target].play()
}

// ############### TARGET EFFECTS METHODS ##################

//Assign target echo level (Between 0 and 1)
Mixer.prototype.assignDelayTime = function (value) {
	this.mix[this.target]._audioNode[3].delayTime.value = value
}

//Assign target filter type
Mixer.prototype.assignFilter = function (filterType) {
	this.mix[this.target]._audioNode[1].filter.type = filterType
}

//Assign playback rate on target (takes 0 to whatever, 1 being actual speed)
Mixer.prototype.assignPlaybackRate = function (value) {
	this.mix[this.target]._audioNode[0].bufferSource.playbackRate.value = value
}

//Assign panning (-1(left) to 1(right))
Mixer.prototype.assignPanning = function (value) {
	this.trackContext([this.target]).listener.setPosition(value, 0, 0)
}

//Toggle track loop
Mixer.prototype.toggleLoop = function () {
	this.mix[this.target]._audioNode[0].bufferSource.loop = !this.mix[this.target]._audioNode[0].bufferSource.loop
}

// ################# MISC METHODS ######################

//Adjusts dial input to valid playback level.. NEEDS REFACTOR
Mixer.prototype.adjustPlayback = function (integer) {
	if (integer >= 50) {
		return (integer / 50).toFixed(2)
	} else {
		return ((integer / 100) + .5).toFixed(2)
	}
}











