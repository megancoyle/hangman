// drawing the Hangman
var canvas = document.getElementById("myCanvas");

// moveTo(x,y) - defines the starting point of the line
// lineTo(x,y) - defines the ending point of the line

var draw = function(moveTox, moveToy, lineTox, lineToy) {
  var line = canvas.getContext("2d");
  line.moveTo(moveTox, moveToy);
  line.lineTo(lineTox, lineToy);
  line.lineWidth=5;
  line.strokeStyle="white";
  line.stroke();
}

var frame1 = function() {
  draw(5, 290, 210, 290);
}

var frame2 = function() {
  draw(30, 6, 30, 290);
}

var frame3 = function() {
  draw(27, 6, 153, 6);
}

var frame4 = function() {
  draw(150, 6, 150, 40);
}

var frame5 = function() {
  draw(30, 50, 60, 6);
}

var frame6 =  function() {
  var head = canvas.getContext("2d");
  head.beginPath();
  head.arc(150,70,30,0,2*Math.PI);
  head.stroke();
}

var frame7 = function() {
  draw(150, 100, 150, 180);
}

var frame8 = function() {
  draw(100, 100, 150, 150);
}

var frame9 = function() {
  draw(150, 150, 200, 100);
}

var frame10 = function() {
  draw(100, 250, 150, 180);
}

var frame11 = function() {
  draw(200, 250, 150, 180);
}

var hangmanFrames = [frame11, frame10, frame9, frame8, frame7, frame6, frame5, frame4, frame3, frame2, frame1];

var drawHangman = function () {
  var frame = lives ;
  hangmanFrames[frame]();
}
