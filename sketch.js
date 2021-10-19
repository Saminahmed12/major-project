// Zombie Shooter
// samin ahmed
// start 10/19/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let level = 2; 
// university
let levelOneBg;

// town
let levelTwoBg;

// trainTracks
let levelThreeBg;

// zombies
let zombie1;
let zombie2;
let zombie3;
let zombie4;
let zombie5;
let zombie6;

// zombie size
let zombieH = 100;
let zombieW = 80;

function preload() {
  // preloadImages

  // backgrounds
  levelOneBg = loadImage("assets/background1.jpg");
  levelTwoBg = loadImage("assets/background2.jpg");
  levelThreeBg = loadImage("assets/background3.jpg");

  // zombies
  zombie1 = loadImage("assets/zombie1.png");
  zombie2 = loadImage("assets/zombie2.png");
  zombie3 = loadImage("assets/zombie3.png");
  zombie4 = loadImage("assets/zombie4.png");
  zombie5 = loadImage("assets/zombie5.png");
  zombie6 = loadImage("assets/zombie6.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // backgroundLevel
  if (level === 1) {
    background(levelOneBg);
  }
  else if (level === 2) {
    background(levelTwoBg);
  }
  else if (level === 3) {
    background(levelThreeBg);
  }

  zombies();
}

function zombies() {
  image(zombie1, random(width), height-100, zombieW, zombieH );
}