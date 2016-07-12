// drawing the Hangman
var canvas = document.getElementById("myCanvas");

// moveTo(x,y) - defines the starting point of the line
// lineTo(x,y) - defines the ending point of the line
var platform1 = canvas.getContext("2d");
platform1.lineWidth=5;
platform1.moveTo(5, 290);
platform1.lineTo(250, 290);
platform1.stroke();

var platform2 = canvas.getContext("2d");
platform2.moveTo(30, 6);
platform2.lineTo(30, 290);
platform2.stroke();

var platform3 = canvas.getContext("2d");
platform3.moveTo(27, 6);
platform3.lineTo(153, 6);
platform3.stroke();

var platform4 = canvas.getContext("2d");
platform4.moveTo(150, 6);
platform4.lineTo(150, 40);
platform4.stroke();

var platform5 = canvas.getContext("2d");
platform5.moveTo(30, 50);
platform5.lineTo(60, 6);
platform5.stroke();

var head = canvas.getContext("2d");
head.beginPath();
head.arc(150,70,30,0,2*Math.PI);
head.stroke();

var torso = canvas.getContext("2d");
torso.moveTo(150, 100);
torso.lineTo(150, 180);
torso.stroke();

var leftArm = canvas.getContext("2d");
leftArm.moveTo(100, 100);
leftArm.lineTo(150, 150);
leftArm.stroke();

var rightArm = canvas.getContext("2d");
rightArm.moveTo(150, 150);
rightArm.lineTo(200, 100);
rightArm.stroke();

var leftLeg = canvas.getContext("2d");
leftLeg.moveTo(100, 250);
leftLeg.lineTo(150, 180);
leftLeg.stroke();

var rightLeg = canvas.getContext("2d");
rightLeg.moveTo(200, 250);
rightLeg.lineTo(150, 180);
rightLeg.stroke();
