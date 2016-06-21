var x;
var num = 50;
var y;
var num= 25;

function setup() {

  createCanvas(720, 360);
  background(59,89,152);
  noStroke();

  // Draw white bars
  fill(255);
  x = 40;
  y= 20;
  for(var i = 0; i < num/3; i++) {
    ellipse(y, x, 50, 50);
    x+=55;
    y+=100;
  }

  // Gray bars
  fill(51);
  x = 40;
  y= 40;
  for(var i = 0; i < num; i++) {
    ellipse(y, x, 10, 10);
    x += 20;
    y =+ 250;
  }

  x= 50;
  y= 700;
  for(var i = 0; i < num; i++) {
    ellipse(y, x, 30, 30);
    x += 40;
    x += 40;
  }

  // Thin lines
  x = 45;
  y= 55;
  fill(0);
  for(var i = 0; i < num-1; i++) {
    ellipse(y, x, 40, 40);
    x+= 40;
    y+= 90;
  }
}
