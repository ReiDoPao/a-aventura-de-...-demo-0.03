var boneco,boneco_parado, boneco_correndo;
var chao,chaoImg;
var chao2;
var isMoviment = false;

function preload (){
  boneco_parado = loadImage("assets/Sprite teste.png");
  boneco_correndo = loadImage("assets/Sprite corre.png")
  chaoImg = loadImage("assets/TexturaChão.png");
}


function setup() {
  createCanvas(800,400);
  chaoGrupo = new Group();
  boneco = createSprite(100,100,10,10);
  boneco.addImage(boneco_parado);
  boneco.scale = 0.03;
 
  
for (c=0; c<=12; c++){
  
    chao = createSprite(28+64*c,390,64,64);
    chao.addImage(chaoImg);
    chaoGrupo.add(chao);
  }
  
 
  chaoGrupo.debug = true;
  //console.log(chao);
  

  chao2 = createSprite(400,374,800,19);
  chao2.visible = false;

  //boneco.debug = true; 
}

function draw() 
{
  background(51);
  boneco.collide(chao2);

  //movimentos

  if (keyIsDown(RIGHT_ARROW)){
   boneco.x = boneco.x + 8;
   isMoviment = true;
  }
  if (keyIsDown(LEFT_ARROW)){
    boneco.x = boneco.x - 8;
    isMoviment = true;
   }
   if (keyWentUp(RIGHT_ARROW) || keyWentUp(LEFT_ARROW)){
    isMoviment = false;
   }
  if (keyDown("space") && boneco.isTouching(chaoGrupo)){
  boneco.velocityY = boneco.velocityY - 15;

  }
  
  
  // lapidar
  /*if (boneco.velocityY > 10){
    boneco.velocityY = 9;
  }*/

  if (isMoviment == true){
    boneco.addImage(boneco_correndo);
  }

  if(isMoviment == false){
    boneco.addImage(boneco_parado);
  }

  console.log(isMoviment);

  //reset do boneco

  if (keyDown("k")){
  boneco.x = 400;
  boneco.y = 200; 
  }

  //gravidade
  boneco.velocityY = boneco.velocityY + 0.8;

  //mouse pega o boneco
  if (mouseIsPressed){
  boneco.y = mouseY;
  boneco.x = mouseX;
  console.log("poin");
}

boneco.depth = chao.depth;
boneco.depth = boneco.depth + 1;

 
  drawSprites();


}
