var mysound, amplitude, cnv;

function preload() {
  mysound = loadSound('beats.wav');
}

function setup() {
  cnv = createCanvas (500, 500)
  amplitude = new p5.Amplitude();

  cnv.mouseClicked(function () {
    if (mysound.isPlaying() ) {
      mysound.stop();
    } else {
      sound.play();
    }
  });
}

function draw() {
  background(0);
  fill(255);
  var level = amplitude.getlevel()
  var size = map (level, 0, 1, 0, 200)
  ellipse (width * 2, height * 2, size, size);
}
