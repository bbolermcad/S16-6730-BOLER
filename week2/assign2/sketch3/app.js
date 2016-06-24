var x;
var num = 50;
var y;
var num= 25;

function setup() {

  createCanvas(720, 360);
  background(255,228,196);
  noStroke();

  // Draw white bars
  fill(16,232,201);
  x = 40;
  y= 20;
  for(var i = 0; i < num/3; i++) {
    ellipse(y, x, 50, 50);
    x+=55;
    y+=100;
  }

  // Gray bars
  fill(255,151,151);
  x = 40;
  y= 40;
  for(var i = 0; i < num; i++) {
    ellipse(y, x, 10, 10);
    x += 20;
    y =+ 20;
  }

  x= 50;
  y= 700;
  for(var i = 0; i < num; i++) {
    ellipse(y, x, 30, 30);
    x += 40;
    x += 40;
  }

  // Thin lines
  fill(191,186,226);
  x = 45;
  y= 55;
  for(var i = 0; i < num-1; i++) {
    ellipse(y, x, 40, 40);
    x+= 40;
    y+= 90;
  }
}
