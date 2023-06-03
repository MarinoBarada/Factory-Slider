$(document).ready(function () {
  $(".prev-arrow").click(function () {
    $(".row1 .slider-item:last-child").appendTo(".row2");
    $(".row2 .slider-item:first-child").appendTo(".row1").prependTo(".row1");
    $(".row1 .slider-item:first-child").hide().fadeIn(2000);
  });

  $(".next-arrow").click(function () {
    $(".row2 .slider-item:last-child").appendTo(".row1");
    $(".row1 .slider-item:first-child").appendTo(".row2").prependTo(".row2");
    $(".row1 .slider-item:first-child").hide().fadeIn(2000);
  });
});
