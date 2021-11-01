// Zombie Shooter
// samin ahmed
// start 10/19/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// 

 
// lvl
let level = 2; 

// backgrounds
let levelOneBg;

let levelTwoBg;
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

// characters
let gunMan;
let gunManFlipped;

let swordMan;
let swordManFlipped;

// image state-gunMan
let gunManRotation = "east";
let loadout = "firearm";


let zombie;
let hero;
let zombieArray = [];

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


  // Characters
  gunMan = loadImage("assets/gunMan.gif");
  gunManFlipped  = loadImage("assets/FlippedGunMan.gif");

  swordMan = loadImage("assets/swordMan.gif");
  swordManFlipped = loadImage("assets/swordManFlipped.gif");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  // new zombies
  let leftRight = [0-100, width];
  zombie = new Zombies(random(leftRight),height-90);
  hero = new Hero(width/2,height-95);
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
  // loadout
  loadoutSwitch();

  // Background switcher
  backgroundSwitcher();

  // new zombies
  zombieSpawner(); 
  zombie.moveZombie();
  zombie.display();
  hero.display();
  hero.move();
  hero.update();
  
  // console.log(zombieArray);
}

class Zombies{
  constructor(x,y){
    this.x = x;
    this.y = y; 
    this.right = this.x > width/2;
    this.left = this.x < width/2;
    this.width = 100;
    this.height= 100;
    this.speed = 1;
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

  // spawn new zombies  
  if (timer > millis()){
    let leftRight = [0-100, width];
    
    let zombie = new Zombies(random(leftRight),height-90);
    zombieArray.push(zombie); 
    timer += millis();
  }
}

class Hero{
  constructor(x,y){
    this.x = x;
    this.y = y; 
    this.speed = 7;
    this.width = 100;
    this.height = 100;
  }

  display(){
    if (gunManRotation === "east"){
      if (loadout === "melee"){
        image(swordMan,this.x,this.y,this.width,this.height);
      }
      else if (loadout === "firearm"){
        image(gunMan, this.x, this.y, this.width, this.height);  
      }
      
    }
    if (gunManRotation === "west"){
      if (loadout === "melee"){
        image(swordManFlipped,this.x,this.y,this.width,this.height);
      }
      else if (loadout === "firearm") {
        image(gunManFlipped, this.x, this.y, this.width, this.height);
      }
      
    }
    
  }
  update(){
    if (keyIsDown(68)){
      gunManRotation = "east";
    }
    if (keyIsDown(65)){
      gunManRotation = "west";
    }
  }
  move(){
    if (keyIsDown(68)){
      this.x += this.speed;
    }
    if (keyIsDown(65)){
      this.x -= this.speed;
    }
  }
}

function mousePressed(){
  // loadout switch
  if (mouseX > width/14 && mouseX < width/14+100 && mouseY > height/10 && mouseY < height/10+50) {
    if (loadout === "melee"){
      loadout = "firearm";
    }
    else{
      loadout = "melee";
    }
  }

  // background switch
  if (mouseX > width/14 && mouseX < width/14+100 && mouseY > height/5 && mouseY < height/5+50) {
    if (level === 1){
      level = 2;
    }
    else if (level === 2){
      level = 3;
    }
    else {
      level = 1;
    }
  }
}

function loadoutSwitch(){
  stroke("lightgrey");
  strokeWeight(4);
  rect(width/14,height/10, 100,50,10);
  stroke("lightgrey");
  strokeWeight(1);
  textSize(8);
  text("SWITCH LOADOUT", (width/14+100)/1.9 , height/10+25);
}

function backgroundSwitcher(){
  stroke("lightgrey");
  strokeWeight(4);
  rect(width/14,height/5, 100,50,10);
  stroke("lightgrey");
  strokeWeight(1);
  textSize(8);
  text("SWITCH SCENE", (width/14+100)/1.75 , height/5+25);
}


class Bullet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.radius = 2;

  }
}

// display new zombies