$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-said").prepend("<li>Meow!</li>");
    $("ul#dog-said").prepend("<li>Woof!</li>");
  });

  $("button#dog").click(function() {
    $("ul#dog-said").prepend("<li>Woof!</li>");
    $("ul#cat-said").prepend("<li>Meow!</li>");
  });
});