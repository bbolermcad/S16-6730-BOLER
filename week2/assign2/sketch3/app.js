int option = 1;
 function setup() {
  size(400, 300);
  smooth();
  noFill();
}

draw() {
  background(255);

    // Option 3: Overlapping circles
    for (int x = 50; x <= width-50; x += 20) {
      for (int y = 50; y <= height-50; y+=20) {
        ellipse(x, y, 40, 40);
      }
    }
  }

void mousePressed() {
  option++;
  if (option > 5) option = 1;
}
