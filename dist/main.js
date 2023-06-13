"use strict";

$(document).ready(function () {
  $(".prev-arrow").click(function () {
    var prevArrow = $(this);
    var rows = $(".row1, .row2");
    prevArrow.prop("disabled", true);
    rows.each(function () {
      var row = $(this);
      var firstItem = row.find(".slider-item:first-child");
      var lastItem = row.find(".slider-item:last-child");
      var lastItemWidth = lastItem.width();
      var moveItems = lastItemWidth + 10;
      firstItem.animate({
        "margin-right": moveItems
      }, 800, function () {
        firstItem.before(lastItem);
        firstItem.css("margin-right", 0);
        lastItem.hide().fadeIn(800, function () {
          prevArrow.prop("disabled", false);
        });
      });
    });
  });
  $(".next-arrow").click(function () {
    var nextArrow = $(this);
    var rows = $(".row1, .row2");
    nextArrow.prop("disabled", true);
    rows.each(function () {
      var row = $(this);
      var firstItem = row.find(".slider-item:first-child");
      var lastItem = row.find(".slider-item:last-child");
      var firstItemWidth = firstItem.width();
      var moveItems = -firstItemWidth - 10;
      firstItem.animate({
        "margin-right": moveItems
      }, 800, function () {
        firstItem.css("margin-right", 0);
        $(this).insertAfter(lastItem);
        nextArrow.prop("disabled", false);
      });
    });
  });
});
