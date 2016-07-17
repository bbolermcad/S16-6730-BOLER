var x, y;

function setup() {
  createCanvas(500, 400);
  background(200);
  y = height;
  x = width/2;
}

function draw(){
  stroke(14, 181, 215)
  fill(14, 181, 215);
  ellipse (x, y, 10, 10);

  y = y - 1;
  x = x + random(-1, 1);

}
