let sound;
let peaks;

async function setup() {
    createCanvas(800, 800);
    pixelDensity(1);
    // sound = await loadSound('assets/gulp.wav');
    // peaks = sound.getPeak();
    // fft = new p5.FFT();
    // sound.connect(fft);
    // noLoop();
}

function draw() {
    frameRate(30);
    background(220);
    let frame = frameCount % 200;

}

function mouseClicked() {
    noFill();
    circle(200, 200, 100);
    for(let i = 0; i < 100; i++) {
        circle(200, 200, 100 + (10 * frameCount));
    }
}

const sinWaves = [
    { freq: .10, amp: 0.2, phase: 0 },
    { freq: .20, amp: 0.2, phase: 60 },
    { freq: .30, amp: 0.2, phase: 70 },
    { freq: .40, amp: 0.2, phase: 32 },
    { freq: .50, amp: 0.2, phase: 5 }
]
let buffer = []

function complexWave(buckets, t) {
    let result = 0;
    for (const wave of buckets) {
        result += wave.amp * sin(wave.freq * t - wave.phase);
    }
    return result;
}

function draw() {
    frameRate(30);
    background(220);
    let frame = frameCount % 200;

    // for (let r = 1; r < 500; r++) {
    //     let wave = complexWave(sinWaves, r + frameCount);
    //     let maskValue = map(wave, -1, 1, 0, 255);
    //     noFill();
    //     // stroke(255,255,255,maskValue);
    //     stroke(0,0,0,maskValue*0.5);
    //     // stroke(maskValue);
    //     strokeWeight(1);
    //     circle(400, 400, r);
    // }
    beginShape();
    for(let i = 0; i < 1000; i++) {
        vertex(i, complexWave(sinWaves, i + frameCount) * 10 + 400);
    }
    endShape();

}

// function draw() {
//     frameRate(30);
//     background(220);
//     let frame = frameCount % 200;

//     // let originX = width / 2;
//     // let originY = height / 2;
//     let originX = mouseX;
//     let originY = mouseY;

//     beginShape();
//     for (let i = 0; i < 350; i++) {
//         let d1 = dist (400, i, originX, originY);
//         let wave1 = sin(d1 * 0.5 - (frameCount / 2));
//         point(200,200);

//         let d2 = dist (400, i, 450, 200);
//         let wave2 = sin(d2 * (0.1333) - (frameCount / 2));
//         point(350,200);

//         point(400 + (wave1 + wave2 * 4), i + 200);
//     }
//     // endShape();
// }

// function draw() {
//     frameRate(30);
//     background(220);
//     let frame = frameCount % 200;

//     // let originX = width / 2;
//     // let originY = height / 2;
//     let originX = mouseX;
//     let originY = mouseY;

//     // circle(200, 200, 150);
//     for (let r = 1; r < 500; r++) {
//         let wave = sin(r * 0.05 - (frameCount/1.5));
//         let maskValue = map(wave, -1, 1, 0, 255);
//         noFill();
//         // stroke(255,255,255,maskValue);
//         stroke(0,0,0,maskValue*0.5);
//         // stroke(maskValue);
//         strokeWeight(1);
//         circle(originX, originY, r);
//     }
//     for (let r = 1; r < 500; r++) {
//         let wave = sin(r * 0.05 - frameCount);
//         let maskValue = map(wave, -1, 1, 0, 255);
//         noFill();
//         // stroke(255,255,255,maskValue);
//         stroke(0,0,0,maskValue*0.5);
//         // stroke(maskValue);
//         strokeWeight(1);
//         circle(originX + 100, originY + 50, r);
//     }
// }