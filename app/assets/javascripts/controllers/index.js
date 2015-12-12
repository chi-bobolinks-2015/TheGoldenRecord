$(document).ready(function () {
  $("#launch").on("click", function(){
    $("#container").empty();
    var main = new Index
    main.build()
  });
});
