let sound;
let peaks;

async function setup() {
    createCanvas(800, 800);
    noLoop();
}

function draw() {
    frameRate(30);
    background(220);
    // mycircle(
    //     createVector(400, 400),
    //     100,
    //     360
    // );
    let origin = createVector(width / 2, height / 2)
    let planet = mkPlanet(origin, 200, 32);
    drawPlanet(planet);
}

function mkPlanet(origin, radius, numPoints) {
    let vectors = []
    for (let i = 0; i < numPoints; i++) {
        let vector = createVector(origin.x, origin.y);
        vector = vector.setMag(radius);
        vector = vector.setHeading(i * (TWO_PI / numPoints));

        // let circleX = origin.x + vector.mag() * cos(vector.heading());
        // let circleY = origin.y + vector.mag() * sin(vector.heading());
        // circle(circleX, circleY, 5)

        vectors[i] = vector;
    }

    let planet = {
        origin: origin,
        vectors: vectors,
    }
    return planet;
}

function drawPlanet(planet) {
    // let vectors = planet.vectors;

    // console.log(planet.vectors[1].mag())
    for (let vector of planet.vectors) {
        // for (let i = 0; i < len(vectors); i++) {
        console.log("====================================")
        console.log(vector.x)
        console.log(vector.y)
        circle(
            planet.origin.x + vector.mag() * cos(vector.heading()),
            planet.origin.y + vector.mag() * sin(vector.heading()),
            5
        )
    }
}

// function mycircle(origin, radius, numPoints) {
// const center = createVector(400, 400);
// const radius = 100;
// const numPoints = 32;

// get array of vectors along circle edge.
// let planet = [];
// for (let i = 0; i < numPoints; i++) {
//     edge[i].angle = i * (TWO_PI / numPoints);
//     edge[i].magnitude = radius;
// }

// draw circle
// for (let i = 0; i < length(planet.edge); i++)

// let vectors = [];
// // Calculate vectors
// for (let i = 0; i < numPoints; i++) {
//     let angle = i * (TWO_PI / numPoints);
//     let windowValue = map(sin(i * 0.5 - frameCount)l;a -1, 1, 0, 1);
//     let noiseValue = noise(i / 0.2) * (windowValue * 0.4) + 1;

//     let mag = radius * noiseValue;
//     // cos(angle) and sin(angle) give the horizontal
//     // and vertical offset from the center, respectively.
//     // Magnitude is the distance from the center.
//     let x = origin.x + mag * cos(angle);
//     let y = origin.y + mag * sin(angle);
//     vectors[i] = createVector(x, y);
// }

// Draw circle
//         noFill();
//     beginShape();
//     for (let i = 0; i < numPoints; i++) {
//         // circle(vectors[i].x, vectors[i].y, 5);
//         splineProperty('tightness', 0.1)
//         splineVertex(vectors[i].x, vectors[i].y)

//     }
//     endShape(CLOSE);
// }