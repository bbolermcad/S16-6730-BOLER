function setup () {
createCanvas(500,500);
r = random(0, 255);
g = random(0, 255);
b = random(0, 255);
}

function draw () {
  var r = random(0, 500);
  stroke (r, g, b);
  fill (r, g, b);
  ellipse(random (0, 500), random (0, 500), 50, 50);
}
