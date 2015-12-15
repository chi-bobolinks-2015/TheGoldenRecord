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

//Build filter structure
Mixer.prototype.buildEffects = function (trackID) {
	var context = this.trackContext(trackID)
	var tuna = new Tuna(context)
	this.buildEcho({'tuna' : tuna, 'context' : context})
}

Mixer.prototype.buildEcho = function (params) {
	var tuna = params['tuna']
	var context = params['context']
	var convolver = new tuna.Convolver({
    highCut: 22050,                         //20 to 22050
    lowCut: 20,                             //20 to 22050
    dryLevel: 1,                            //0 to 1+
    wetLevel: 10,                            //0 to 1+
    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
    impulse: "/assets/Musikvereinsaal.wav",    //the path to your impulse response
    bypass: 0
	});
	var input = this.mix[0]._audioNode[0]
	input.connect(convolver)
	var output = context.destination
	convolver.connect(output)
}




// ############### GLOBAL METHODS ##################

//Plays all items in mix array
Mixer.prototype.globalPlay = function () {
	for (var i = 0; i < 6; i++) {
		if (this.mix[i] != null) {
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
	this.mix[this.target].play()
}

// ############### TARGET EFFECTS METHODS ##################
















