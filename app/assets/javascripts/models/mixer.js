Mixer = function () {
	this.mix = []
	this.target
}

// ############### TRACK METHODS ##################

//Adds a track to the mix. Takes args = {urls: sound.aws.com, divId: 1}
Mixer.prototype.addTrack = function (args) {
	console.log(args['url'])
	var newTrack = new Howl({
		urls: [args['urls']]
	}); 
	this.mix[args['divId']] = newTrack;
}

//Removes a track from the mix array
Mixer.prototype.removeTrack = function (position) {
	this.mix[position] = null;
}

// ############### GLOBAL METHODS ##################

//Plays all items in mix array
Mixer.prototype.globalPlay = function () {
	for (var i = 0; i < 6; i++) { 
		if (this.mix[i] != null) {
			this.mix[i].play()
		}
	}
}

//Pauses all items in mix array
Mixer.prototype.globalPause = function () {
	for (var i = 0; i < 6; i++) { 
		if (this.mix[i] != null) {
			this.mix[i].pause()
		}
	}
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
