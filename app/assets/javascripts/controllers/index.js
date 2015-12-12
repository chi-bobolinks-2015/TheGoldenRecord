$(document).ready(function () {
  $("#launch").on("click", function(){
    $("#container").empty();
    var main = new Index
    main.build()
  });
});

Index = function() {
}

Index.prototype.build = function() {
  this.sidebar()
}

Index.prototype.sidebar = function() {
  var request = $.ajax({
    method: 'GET',
    url: '/categories'
    // dataType: 'json'
  })
  request.done(function(response){
    console.log(response)
  })
  // For each category create a div.
  // For every div create hidden divs (tracks).
}


Index.prototype.mixer = function() {

}

Index.prototype.controller = function() {

}
