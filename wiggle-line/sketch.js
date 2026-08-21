let sound;
let peaks;

async function setup() {
    createCanvas(400, 400);
    sound = await loadSound('assets/gulp.wav');
    // peaks = sound.getPeak();
    fft = new p5.FFT();
}

let frame = frameCount % 100;
frameRate(15);

function draw() {
    background(220);

    beginShape();
    let i = 1;
    while (i < 500) {
        vertex(i, sin((i + mouseX) / 4) * 50 + 200);
        i += 1;
    }
    endShape();
}