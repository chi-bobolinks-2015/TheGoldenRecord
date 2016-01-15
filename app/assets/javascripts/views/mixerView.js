function setHexagons(){
   $('.honeycombs').honeycombs({
    combWidth: 225,
    margin: 10
  });
}

function addColor(divId) {
  var target = $("div#" + divId + " div.hex_l div.hex_r div.hex_inner");
  $(target).addClass("on-mixer");
};

// function addToDeck(){
//   $(".deck").droppable({
//     // accept: ".mixer-image",
//     drop: function(event, ui) {
//       ui.draggable.parent().toggleClass("on-deck");
//     }
//   });
// }

function loadImage(imageUrl, cell){
  // $(cell).append("<img src=" + imageUrl + " class='mixer-image'>");

  $(cell).find("img").map(function() {return $(this).attr("src", imageUrl)});

  $(this).each(function(){
    var css = 'url("'+imageUrl+'") ';
    $(cell).find('.hex_inner').attr('style', 'width: 225px; height: 194.856px; background-image: ' + css);
    // This is where you add background color.
  });
}

function unloadImage(hex) {
    var image = "/assets/sound-categories/plus-38f39e94becd749ab1696484d51c2f63828c84573c72b496e2eb2587cad1b282.png";
   $(hex).attr('style', 'width: 225px; height: 194.856px; background-image: url(' + image + ')');
   $(hex).parent().parent().parent().find('img').attr('src', image);
}

// function showTargetTrackInControlPanel(divId){
//     var idString = divId.toString();
//     var trackTitle = $("div#" + idString).find(".inner-text").text();
//     $("p#track-title").remove();
//     $(".control-panel").append("<p id='track-title'>" + trackTitle + "</p>");
// }

// Adds track title hover, used by dropTrack
function assignTrackInfoHover(cell, currentMixer, trackTitle){
   $(cell).find('.inner-text').html(trackTitle);
};
