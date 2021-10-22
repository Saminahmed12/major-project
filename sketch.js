// Zombie Shooter
// samin ahmed
// start 10/19/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// lvl
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

// zombies/2
let zombie1Flipped;
let zombie2Flipped;
let zombie3Flipped;
let zombie4Flipped;
let zombie5Flipped;
let zombie6Flipped;

let zombie;

// timer/millis
let timer = 2000;

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

  // zombiesFlipped
  zombie1Flipped = loadImage("assets/zombie1flipped.png");
  zombie2Flipped = loadImage("assets/zombie2flipped.png");
  zombie3Flipped = loadImage("assets/zombie3flipped.png");
  zombie4Flipped = loadImage("assets/zombie4flipped.png");
  zombie5Flipped = loadImage("assets/zombie5flipped.png");
  zombie6Flipped = loadImage("assets/zombie6flipped.png");

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  // new zombies
  let leftRight = [0-100, width];
  zombie = new Zombies(random(leftRight),height-90);
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

  // new zombies
  zombieSpawner();
  zombie.moveZombie();
}

class Zombies{
  constructor(x,y){
    this.x = x;
    this.y = y; 
    this.right = this.x > width/2;
    this.left = this.x < width/2;
    this.width = 100;
    this.height= 100;
    this.speed = random(1,3);
    this.sprites = [zombie1,zombie2,zombie3,zombie4,zombie5,zombie6];
    this.spritesFlipped = [zombie1Flipped,zombie2Flipped,zombie3Flipped,zombie4Flipped,zombie5Flipped,zombie6Flipped];
    this.zombieSprite = random(this.sprites);
    this.zombieSpriteFlipped = random(this.spritesFlipped);
  }

  display(){
    // displays zombies
    if (this.right){
      image(this.zombieSprite ,this.x,this.y,this.width,this.height);
    }
    else if (this.left){
      image(this.zombieSpriteFlipped ,this.x,this.y,this.width,this.height);
    }
  }

  moveZombie(){
    // moves zombies depending on if they are going left or right
    if (this.right){
      this.x -= this.speed;
    }
    else if (this.left){
      this.x += this.speed;
    }
  }
}

function zombieSpawner(){

  // ?spawn new zombies
  if (timer > millis()){
    zombie.display();
    timer += millis();
  }
}