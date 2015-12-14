Mixer = function () {
	this.mix = []
}

//Adds a track to the mix. Example args = {url: sound.aws.com, divId: 1}
Mixer.prototype.addTrack = function (args) {
	var newTrack = new Howl({
		url : [args[:url]]
	}); 
	this.mix[args[:divId]] = newTrack
}