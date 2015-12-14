var Mixer = function () {
	this.mix = []
	this.target
	this.pause = false
}

// ############### TRACK METHODS ##################

//Adds a track to the mix. Takes args = {urls: sound.aws.com, divId: 1}
Mixer.prototype.addTrack = function (args) {
	var newTrack = new Howl({
		urls: [args['urls']]
	});
	this.mix[args['divId']] = newTrack;
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

// ############### TARGET METHODS ##################

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
