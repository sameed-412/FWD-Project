$(document).ready(function () {
    $("#video-background").show();
    //hide everything before search
  $(".weatherinfo").hide();
  $("#submit").click(function () {
    $(".weatherinfo").fadeIn(1500);
    $(".intro").fadeOut("fast");
  });
  $("#city").click(function () {
    $(".weatherinfo").fadeOut("slow");
    $(".intro").fadeIn("slow");
    $("#video-background").show();
  });
  //slide toggle
  $("#slidein").click(function(){
    $("#panel").slideToggle(1500);
});
});
submit.addEventListener("click", (placeholder) => {
    placeholder.preventDefault();
  });