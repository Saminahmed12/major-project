// Zombie Shooter
// samin ahmed
// start 10/19/21
// ends 11/04/21

// ////////////////////////////////////////////GLOBAL/VARIABLES/////////////////////////////////////////////////////////////
 
// lvl
let level = 2; 

// start, in game, or end
let currentState = "start";

// backgrounds
let levelOneBg;

let levelTwoBg;

let levelThreeBg;

let startScreen;

let deathScreen;

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

//sounds
let bgSound;
let zombieSound;

// collide
let deathToHero;


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



////////////////////////////////////////////SETUP///PRELOAD///DRAW/////////////////////////////////////////////////////////////////
function preload() {
  // preloadImages

  // backgrounds
  levelOneBg = loadImage("assets/background1.jpg");
  levelTwoBg = loadImage("assets/background2.jpg");
  levelThreeBg = loadImage("assets/background3.jpg");
  startScreen = loadImage("assets/startScreen.png");
  deathScreen = loadImage("assets/deathScreen.png");

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

  // sounds
  bgSound = loadSound("assets/zombieBG.mp3");
  zombieSound = loadSound("assets/zombieGroans.mp3");


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
  if (currentState === "start"){
    background(startScreen);
  }
  
  else if (currentState === "game"){
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
    for (let i = 0; i < zombieArray.length; i++){
      zombieArray[i].moveZombie();
      zombieArray[i].display();
    }
  
    hero.display();
    hero.move();
    hero.update();
  
  }

  else if(currentState === "death"){
    background(deathScreen);
  }
  
  
}


/////////////////////////////////////////////////////CLASSES/////////////////////////////////////////////////////////////////////
class Zombies{
  // zombie class
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



class Hero{
  // hero
  constructor(x,y){
    this.x = x;
    this.y = y; 
    this.speed = 7;
    this.width = 100;
    this.height = 100;
  }

  display(){
    // rotating hero and loadout change
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
    // rotation
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



//////////////////////////////////////////////FUNCTIONS//////////////////////////////////////////////////////////////
function zombieSpawner(){

  // spawn new zombies  
  if (timer < millis()){
    let leftRight = [0-100, width];

    let zombie = new Zombies(random(leftRight),height-90);
    zombieArray.push(zombie); 
    timer = millis() + 6500; 
  }
  console.log(timer);
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
  //start
  if (currentState === "start"){
    currentState = "game";
    if (mouseIsPressed){
      zombieSound.loop();
      bgSound.loop();
    }
    
  }

  // restart
  if (currentState === "death"){
    currentState === "game";
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
  // button for loadout
  stroke("lightgrey");
  strokeWeight(4);
  rect(width/14,height/10, 100,50,10);
  stroke("lightgrey");
  strokeWeight(1);
  textSize(8);
  text("SWITCH LOADOUT", (width/14+100)/1.9 , height/10+25);
}

function backgroundSwitcher(){
  // button for background
  stroke("lightgrey");
  strokeWeight(4);
  rect(width/14,height/5, 100,50,10);
  stroke("lightgrey");
  strokeWeight(1);
  textSize(8);
  text("SWITCH SCENE", (width/14+100)/1.75 , height/5+25);
}


// //////////////////////////////////////////////UNFINISHED:(//////////////////////////////////////////////////////////

class Bullet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.radius = 2;
  }

  move(){

  }

  display(){

  }
}
function death() {

}

function points(){

}