<!---night mode! -->
$(".onbutton").click(function() {
  $("p").css("color", "white");
});
$(".onbutton").click(function() {
  $(".jumbotron").css("background-color", "black");
});
$(".onbutton").click(function() {
  $("body").css("background-color", "black");
});

<!-- undo night mode --!>

$(".offbutton").click(function() {
$(".jumbotron").removeAttr("style");
});

$(".offbutton").click(function() {
$("p").removeAttr("style");
});

$(".offbutton").click(function() {
$("body").removeAttr("style");
});
