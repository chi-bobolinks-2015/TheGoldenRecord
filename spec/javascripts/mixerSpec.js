describe("Mixer", function(){
  var mixer;
  var song;

  beforeEach(function(){
    mixer = [];
    song = new Howl({
      urls: "https://s3.amazonaws.com/the-golden-record/Music/Soul+Jazz-Mike+Frederick.mp3"

    });

    it("should be play a particular song", function() {
      // play song
      // expect player at song to be playing ((pause: false)?)
    });

    describe("when song has been paused", function() {
      beforeEach(function() {
        // pause song
        // pause on this song should be true
      });
    });
  });
});



