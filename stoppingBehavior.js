// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$(document).ready(function () {
  $("#more-info").click(function () {
    alert("Here's some info");
  });
});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$(document).ready(function () {
  $(".dog").click(function () {
    alert("Bow wow!");
  });
});
