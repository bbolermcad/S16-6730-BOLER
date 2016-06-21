function setup() {

  createCanvas(720, 360);
  background('rgba(100%,0%,100%,0.5)');
  noStroke();

  var gridSize = 35;

  for (var x = gridSize; x <= width - gridSize; x += gridSize) {
    for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(0);
      rect(x-1, y-1, 3, 3);
      stroke(0, 50);
      line(x, y, width/6, height/2);
    }
  }

}
