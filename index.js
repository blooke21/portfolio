$(document).ready(function () {
  $("#module-trigger").click(function () {
    console.log("Clicked");
    $("#module-container").css("display", "block");
    $("body").css("overflow", "hidden");
    $("#darkness").css({ opacity: ".5", display: "block" });
  });
  $("#module-close").click(function () {
    location.reload();
  });
});
