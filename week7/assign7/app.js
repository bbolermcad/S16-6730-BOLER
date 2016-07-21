function setup () {
createCanvas(500,500);
}

function draw () {
  for (var i = 0; i < 100; i++) {
  var r = random(-500, 500);
  line(400,i,400+r,i);
}
}
