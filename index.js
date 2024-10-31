$(document).ready(function () {
  var id;

  $(".module-trigger").click(function () {
    id = $(this).attr("id");

    $(".module-container").each(function () {
      console.log("tigger id = " + id);
      console.log("looped module id = " + $(this).attr("id"));

      if (id == "resume-trigger" && $(this).attr("id") == "resume-module") {
        $(this).css("display", "block");
      }
      if (id == "LTC" && $(this).attr("id") == "LTC-module") {
        $(this).css("display", "block");
      }
      $("body").css("overflow", "hidden");
      $("#darkness").css({ opacity: ".5", display: "block" });
    });
  });

  $(".module-close").click(function () {
    location.reload();
  });
});
