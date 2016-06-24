var x = 0;
function setup () {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(153);
  x = x + 3;
  if (x > width) {
    x = 0;
  }
  ellipse (x, 2, x, width);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
