Mixer = function () {
	this.mix = []
}

//Adds a track to the mix. Takes args = {url: sound.aws.com, divId: 1}
Mixer.prototype.addTrack = function (args) {
	var newTrack = new Howl({
		url : [args['url']]
	}); 
	this.mix[args['divId']] = newTrack
}

Mixer.prototype.removeTrack = function (arrayPosition) {
	this.mix[arrayPosition] = null
}
