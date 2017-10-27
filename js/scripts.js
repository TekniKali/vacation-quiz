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
