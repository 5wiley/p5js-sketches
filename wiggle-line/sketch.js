let sound;
let peaks;

async function setup() {
    createCanvas(800, 800);
    // noLoop();
}

function draw() {
    frameRate(30);
    background(220);
    mycircle(
        createVector(400, 400),
        100,
        360
    );
}

function mycircle(origin, radius, numPoints) {
    // const center = createVector(400, 400);
    // const radius = 100;
    // const numPoints = 32;

    // get array of vectors along circle edge.
    let vectors = [];
    // Calculate vectors
    for (let i = 0; i < numPoints; i++) {
        let angle = i * (TWO_PI / numPoints);

        // sin function windows the peaks and also the jaggedness of noise
        let windowValue = map(sin(i * 0.5 - frameCount), -1, 1, 0, 1);
        let noiseValue = noise(i / 0.2) * (windowValue * 0.4) + 1;

        let mag = radius * noiseValue;
        // cos(angle) and sin(angle) give the horizontal
        // and vertical offset from the center, respectively.
        // Magnitude is the distance from the center.
        let x = origin.x + mag * cos(angle);
        let y = origin.y + mag * sin(angle);
        vectors[i] = createVector(x, y);
    }

    // Draw circle
    noFill();
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        // circle(vectors[i].x, vectors[i].y, 5);
        splineProperty('tightness', 0.1)
        splineVertex(vectors[i].x, vectors[i].y)

    }
    endShape(CLOSE);
}