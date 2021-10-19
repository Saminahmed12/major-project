// Zombie Shooter
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let level = 1;
let levelOneBg;
let levelTwoBg;
let levelThreeBg;

function preload() {
  levelOneBg = loadImage("assets/background1.jpg");
  levelTwoBg = loadImage("assets/background2.jpg");
  levelThreeBg = loadImage("assets/background3.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (level === 1) {
    background(levelOneBg);
  }
  else if (level === 2) {
    background(levelTwoBg);
  }
  else if (level === 3) {
    background(levelThreeBg);
  }
}

