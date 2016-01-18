function setSidebar(){
  setCollapsible();
  setTrackInfo();
  setTrackDrag();
};

function setCollapsible(){
  $(".category-name").on("click", function () {
    $(this).children().toggleClass("hidden");
  });

  $(".tracks").click(function(e) {
    e.stopPropagation();
  });

  $(".collapsible").on("click", function(){
    $(".sidebar").toggleClass("hidden");
    $(".mix").toggleClass("col-lg-11");
    $(".mix").toggleClass("col-lg-10");
  });
};

function setTrackInfo(){
   $(".popup-window").on("click", function() {
    var trackId = $(this).data("track-id")
    var trackTitle = $(this).data("track-title")
    var trackArtist = $(this).data("track-artist")
    var trackDescription = $(this).data("track-description")
    var popupBox = $(".popup-box");
    popupBox.fadeIn(400);

    popupBox.empty();
    popupBox.append("<h2 class='f-header'>" + trackArtist + "</h2>");
    popupBox.append("<h3 class='mb-lg mt-none'>" + trackTitle + "</h3>");

    if (trackDescription === "") {
      popupBox.append("<p>Information about artist and track coming soon!</p>");
    } else {
      popupBox.append("<p>" + trackDescription + "</p>");
      popupBox.append()
    };



    popupBox.append('<button type="button" class="close f-header">close</button>');

    $('body').append('<div class="container" id="mask"></div>');
    $("#mask").fadeIn(400);

  });

  $("body").on("click", ".close", function() {
    $(".popup-info").hide();
    $("#mask").remove();
  });
}

function setTrackDrag(){
  $(".draggableTrack").draggable({
    containment: ".container",
    cursor: "move",
    snap: ".cell",
    helper: "clone"
  });
}

