$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul").prepend("<li>Meow!</li?>");
  });

  $("button#dog").click(function() {
    $("ul").prepend("<li>Woof!</li>")
  });
});