function setWelcome(){
   $(".welcome").on("click", function() {
    $(this).fadeOut(1400);
    $(this).parent().slideUp(1800);
  });
}