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

// zombies/2
let zombie1Flipped;
let zombie2Flipped;
let zombie3Flipped;
let zombie4Flipped;
let zombie5Flipped;
let zombie6Flipped;

let zombie;


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
  zombie = new Zombies(random(width),height-100);
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
  zombie.display();
  zombie.moveZombie();
}

class Zombies{
  constructor(x,y){
    this.x = x;
    this.y = y; 
    this.width = 100;
    this.height= 100;
    this.speed = 5;
    this.sprites = [zombie1,zombie2,zombie3,zombie4,zombie5,zombie6];
    this.spritesFlipped = [zombie1Flipped,zombie2Flipped,zombie3Flipped,zombie4Flipped,zombie5Flipped,zombie6Flipped];
  }

  display(){
    
    console.log(millis());
    let timer = 1000;
    if (timer > millis()){
      let zombieSprite = random(this.sprites);
      let zombieSpriteFlipped = random(this.spritesFlipped);
      if (this.x > width/2){
        image(zombieSprite ,this.x,this.y,this.width,this.height);
        timer = timer+millis();
      }
      else if (this.x < width/2){
        image(zombieSpriteFlipped ,this.x,this.y,this.width,this.height);
        timer = timer+millis();
      }
    }
    
    
    
  }

  moveZombie(){
    if (this.x > width/2){
      this.x -= this.speed;
    }
    else if (this.x < width/2){
      this.x += this.speed;
    }
  }
}