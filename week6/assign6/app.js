var x, y;

function setup() {
  createCanvas(500, 400);
  background(200);
  y = 0;
  x = width/2;
}


  function draw(){
  stroke(14, 181, 215)
  fill(14, 181, 215);

  ellipse (x*0.5, y, 10, 10);
  ellipse (x, y*1.2, 10, 10);
  ellipse (x*.7, y*0.7, 10, 10);
  ellipse (x, y*1, 10, 10);
  ellipse (x*.2, y*0.9, 10, 10);
  ellipse (x*.5, y*1, 10, 10);
  ellipse (x*9, y*0.9, 10, 10);

  y = y + 1;
  x = x + random(-1, 1);
}
