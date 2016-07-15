var pos;

function setup() {
createCanvas (600, 600);
angleMode(DEGREES);

pos = 0.0;
inc = 4.0;

}

function draw() {
  clear()

  translate(width/2, height/2);

  var mySinVal = sin(pos);
  amplified = mySinVal * 10;

  for (x = 0; x <= 360; x = x + 10); {
    fill(101, 36, 175);
    ellipse(0, 100, 20, 20);
    rotate(x);
}

pos = pos + inc;

}
