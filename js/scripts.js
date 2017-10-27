var dest1 = 0;
var dest2 = 0;
var dest3 = 0;
var dest4 = 0;

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var q1 = parseInt($("#activities").val());
    var q2 = parseInt($("#family").val());
    var q3 = parseInt($("#lodging").val());
    var q4 = parseInt($("#crowds").val());

    if (q1 == 1) {
      dest1 += 1;
    } else if (q1 == 2) {
      dest2 += 1;
    } else if (q1 == 3) {
      dest3 += 1;
    } else if (q1 == 4) {
      dest4 += 1;
    }

    if (q2 == 1) {
      dest1 += 1;
    } else if (q2 == 2) {
      dest2 += 1;
    } else if (q2 == 3) {
      dest3 += 1;
    } else if (q2 == 4) {
      dest4 += 1;
    }

    if (q3 == 1) {
      dest1 += 1;
    } else if (q3 == 2) {
      dest2 += 1;
    } else if (q3 == 3) {
      dest3 += 1;
    } else if (q3 == 4) {
      dest4 += 1;
    }

    if (q4 == 1) {
      dest1 += 1;
    } else if (q4 == 2) {
      dest2 += 1;
    } else if (q4 == 3) {
      dest3 += 1;
    } else if (q4 == 4) {
      dest4 += 1;
    }
