Mixer = function () {
	this.mix = []
}

//Adds a track to the mix. Example args = {url: sound.aws.com, divId: 1}
Mixer.prototype.addTrack = function (args) {
	var newTrack = new Howl({
		url : [args['url']]
	}); 
	this.mix[args['divId']] = newTrack
}

// var someMix = new Mixer
// someMix.addTrack({url: 'https://s3.amazonaws.com/the-golden-record/Birds%2C+Hyena%2C+Elephant.wav', divId: 1})
// console.log(someMix.mix) 