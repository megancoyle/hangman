// drawing the Hangman
var canvas = document.getElementById("myCanvas");

// moveTo(x,y) - defines the starting point of the line
// lineTo(x,y) - defines the ending point of the line

function draw (moveTox, moveToy, lineTox, lineToy) {
  var line = canvas.getContext("2d");
  line.moveTo(moveTox, moveToy);
  line.lineTo(lineTox, lineToy);
  line.lineWidth=5;
  line.strokeStyle="white";
  line.stroke();
}

function frame1() {
  draw(5, 290, 210, 290);
}

function frame2() {
  draw (30, 6, 30, 290);
}

function frame3() {
  draw (27, 6, 153, 6);
}

function frame4() {
  draw (150, 6, 150, 40);
}

function frame5() {
  draw (30, 50, 60, 6);
}

function frame6() {
  var head = canvas.getContext("2d");
  head.beginPath();
  head.arc(150,70,30,0,2*Math.PI);
  head.stroke();
}

function frame7() {
  draw (150, 100, 150, 180);
}

function frame8() {
  draw (100, 100, 150, 150);
}

function frame9() {
  draw (150, 150, 200, 100);
}

function frame10() {
  draw (100, 250, 150, 180);
}

function frame11() {
  draw (200, 250, 150, 180);
}
