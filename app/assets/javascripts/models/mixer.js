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
	// this.buildEffects(trackID);
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

	//Set context and Tuna object for the track
	var context = this.trackContext(trackID)
	var tuna = new Tuna(context)

	//Build new filter
	var filter = this.buildFilter({'tuna' : tuna, 'context' : context})

		//Push effect into _audioNode array for future manipulation
		this.mix[trackID]._audioNode.push(filter)

	//Build new convolver
	var convolver = this.buildConvolver({'tuna' : tuna, 'context' : context})

		//Push effect into _audioNode array for future manipulation
		this.mix[trackID]._audioNode.push(convolver)


	//Point at the gainNode created in our new Howl
	var input = this.mix[0]._audioNode[0]

	//Set output destination to our context destination(speakers)
	var output = context.destination

	//Connect our input to our filter
	input.connect(filter)	

	//Connect our filter to our convolver
	filter.connect(convolver)

	//Connect our convolver to the context's destination
	convolver.connect(output)

}

//Create new tuna.Filter
Mixer.prototype.buildFilter = function (params) {

	//Set variables for new effect from params
	var tuna = params['tuna']
	var context = params['context']

	//Create new filter effect
	var filter = new tuna.Filter({
    frequency: 440, //20 to 22050
    Q: 1, //0.001 to 100
    gain: 0, //-40 to 40
    filterType: "highpass", //lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
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
    wetLevel: 10,                            //0 to 1+
    level: 1,                               //0 to 1+, adjusts total output of both wet and dry
    impulse: "/assets/von\ klitzing\ effect\ 4R.wav",    //the path to your impulse response
    bypass: 0
	});

	//Return the convolver
	return convolver
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

//Turn target convolver on and off
Mixer.prototype.toggleConvolver = function () {
		this.mix[this.target]._audioNode[2].bypass = !this.mix[this.target]._audioNode[2].bypass
}

//Assign target echo level
Mixer.prototype.assignTargetConvolver = function (params) {

	// var highCut = params['highCut']
	// var lowCut = params['lowCut']
	// var dryLevel = params['dryLevel']
	// var wetLevel = params['wetLevel']
	// var level = params['level']
	// var impulse = params['impulse']
	// var bypass = params['bypass']

}

    // highCut: 22050,                         
    // lowCut: 20,                             
    // dryLevel: 1,                            
    // wetLevel: 1,                            
    // level: 1,                            
    // impulse: "impulses/impulse_rev.wav",   
    // bypass: 0














