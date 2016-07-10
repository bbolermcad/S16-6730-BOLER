var beats, sound1, sound2;
var shape1, shape2,

function preload() {
  beats = loadSound('beats.wav');
  sound 1 = loadSound('guitar.wav')
  sound 2 = loadSound('synth.mp3')
}

function setup() {
  createCanvas(500, 500)
  background (202, 190, 190)
  beats.loop();
}

shape1=function draw () {
  rectangle(150, 150, 150, 150);
  background(14, 189, 189);
}
  
