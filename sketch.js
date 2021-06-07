var rocket_img,rocket_sound;
var space_img,space;
var mercury_img,venus_img,earth_img,mars_img,jupiter_img,saturn_img,uranus_img,neptune_img;
var meteorite_img;
var meteorite,meteoriteGroup;
var rocket;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var coins,coins_img,coinsGroup;
var gameState;
var END=0;
var mercuryState = 1;
var venusState = 2;
var earthState = 3;
var marsState = 4;
var jupiterState = 5;
var saturnState = 6;
var uranusState = 7;
var neptuneState = 8;
var restart = 9;
var score = 0;
var resetState;
var mercuryr = 0;
var venusr = 1;
var earthr = 2;
var marsr = 3;
var jupiterr = 4;
var saturnr = 5;
var uranusr = 6 ;
var neptuner = 7;



function preload(){
space_img = loadImage("space.jpg");
rocket_img = loadImage("rocket.png");
rocket_sound = loadSound("rocketsound.wav");
earth_img = loadImage("earth.png");
mars_img = loadImage("mars.png");
jupiter_img = loadImage("jupiter.png");
saturn_img = loadImage("saturn.png");
uranus_img = loadImage("uranus.png");
neptune_img = loadImage("neptune.png");
meteorite_img = loadImage("meteorite.png");
coins_img = loadImage("coins.png");
mercury_img = loadImage("mercury.png");
venus_img = loadImage("venus.png");
}

function setup() {
 var canvas = createCanvas(1200,500);

 space = createSprite(600,250);
 space.addImage("space",space_img);
 space.velocityX = -(4+score/10);

 mercury = createSprite(1400,250,200,200);
 mercury.addImage(mercury_img);
 mercury.visible = false;

 venus = createSprite(1400,250,200,200);
 venus.addImage(venus_img);
 venus.visible = false;

 earth = createSprite(1400,250,200,200);
 earth.addImage(earth_img);
 earth.visible = false;

 mars = createSprite(1400,250,200,200);
 mars.addImage(mars_img);
 mars.visible = false;
 mars.scale = 0.7;
 

 jupiter = createSprite(1400,250,200,200);
 jupiter.addImage(jupiter_img);
 jupiter.visible = false;
 jupiter.scale = 1.3;

 saturn = createSprite(1400,250,200,200);
 saturn.addImage(saturn_img);
 saturn.visible = false;
 saturn.scale = 1.4;

 uranus = createSprite(1400,250,200,200);
 uranus.addImage(uranus_img);
 uranus.visible = false;
 uranus.scale = 1.2;

 neptune = createSprite(1400,250,200,200);
 neptune.addImage(neptune_img);
 neptune.visible = false;

 rocket = createSprite(100,250,50,50);
 rocket.addImage("rocket",rocket_img);
 rocket.scale = 0.5;
 rocket.setCollider("rectangle",20,0,300,100);
 //rocket_sound.loop();

 coinsGroup = new Group();
 meteoriteGroup = new Group();
 gameState = mercuryState;
 resetState = mercuryr;
 
}

function draw() {
    background("black");
    if(gameState === mercuryState){
        rocket.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        
        
        
if(meteoriteGroup.isTouching(rocket)){
    rocket.destroy();
    gameState = END;
    
}   
if(score === 1){
    Mercury();    
}

 
    }


    if(gameState === END){
        //rocket.destroy();
        //background("black");
        
        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);

        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        space.velocityX = 0;


    }
    
    if(gameState === restart){

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);

        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        space.visible = false;
            console.log("return");
            rocket.visible = false;
            stroke("blue");
            fill("blue");
            textSize(30);
            textFont("ComicSansMS");
            text("Congratulations!You have finished this Stage!",300,250);

            stroke("blue");
            fill("blue");
            textSize(30);
            textFont("ComicSansMS");
            text("To go to the next stage press R",300,300);

            
            if(resetState === mercuryr){
                if(keyDown("r")){
                    console.log("test");
                   gameState = venusState;
                }
            }

            if(resetState === venusr){
                if(keyDown("r")){
                console.log("test");
                gameState = earthState;
                }
            }

            if(resetState === earthr){
                if(keyDown("r")){
                console.log("test");
                gameState = marsState;
                }
            }

            if(resetState === marsr){
                if(keyDown("r")){
                    console.log("test");
                   gameState = jupiterState;
                }
            }
            if(resetState === jupiterr){
                if(keyDown("r")){
                console.log("test");
                gameState = saturnState;
                }
            }
            if(resetState === saturnr){
                if(keyDown("r")){
                console.log("test");
                gameState = uranusState;
                }
            }
        if(resetState === uranusr){
                if(keyDown("r")){
                console.log("test");
                gameState = neptuneState;
                }
            }

        if(resetState === neptuner){
                if(keyDown("r")){
                console.log("test");
                gameState = neptuneState;
                }
            }


            
        
    }
    if(gameState === venusState){
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        if(score === 2){
            Venus();
        }
    }

    if(gameState === earthState){
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        if(score === 3){
            Earth();
        }
    }

    if(gameState === marsState){
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        
        if(score === 4){
            Mars();
        }
    }

    if(gameState === jupiterState){
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        if(score === 5){
            Jupiter();
        }
        
    }
    
    if(gameState === saturnState){
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        
        if(score === 6){
            Saturn();
        }
    }

    if(gameState === uranusState){
        resetState = mercuryr;

        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        
        if(score === 7){
            Uranus();
        }
    }

    if(gameState === neptuneState){
        resetState = mercuryr;

        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            
        } 
        
        if(score === 8){
            Neptune();
        }
    }
    if(resetState === earthr){

    }
    
    
   

    



 spawnMeteorites();
 spawnCoins();
 drawSprites();
 stroke("white");
 fill("white");
 textSize(35);
 textFont("ComicSansMS");
 text("Score : "+score,75,60);
 console.log(gameState);
}

function spawnMeteorites(){
    if(frameCount%100===0){
        var rand = Math.round(random(50,450));
        meteorite = createSprite(1200,rand,50,50);
        meteorite.addImage(meteorite_img);
        meteorite.velocityX = -(5+score/10);
        meteorite.lifetime = 240;
        meteorite.scale = 0.5
        meteorite.setCollider("rectangle",0,0,200,200)
        meteoriteGroup.add(meteorite);
    }
}

function spawnCoins(){
    if(frameCount%120===0){
        var rand = Math.round(random(50,450));
        coins = createSprite(1200,rand,50,50);
        coins.addImage(coins_img);
        coins.velocityX = -(5+score/10);
        coins.lifetime = 240;
        coins.scale = 0.1;
        coinsGroup.add(coins);

    }

}

function Mars(){
   background(0);

        
        mars.visible = true;
        mars.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(mars.isTouching(rocket)){
            gameState = restart;
            mars.destroy();
            resetState = marsr;
            

        }
}
function Jupiter(){
    background(0);

        
        jupiter.visible = true;
        jupiter.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(jupiter.isTouching(rocket)){
            gameState = restart;
            jupiter.destroy();
            resetState = jupiterr;
        }

}

function Saturn(){
    background(0);

        
        saturn.visible = true;
        saturn.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(saturn.isTouching(rocket)){
            gameState = restart;
            saturn.destroy();
            resetState = saturnr;
        }

}

function Uranus(){
    background(0);

        
        uranus.visible = true;
        uranus.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(uranus.isTouching(rocket)){
            gameState = restart;
            uranus.destroy();
            resetState = uranusr;
        }
}

function Neptune(){
    background(0);

        
        neptune.visible = true;
        neptune.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(neptune.isTouching(rocket)){
            gameState = restart;
            neptune.destroy();
            resetState = neptuner;
        }
}

function Mercury(){
    background(0);
 
         
         mercury.visible = true;
         mercury.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
         
         if(mercury.isTouching(rocket)){
             gameState = restart;
             mercury.destroy();
             resetState = mercuryr;
             
 
         }
 }

 function Venus(){
    background(0);
 
         
         venus.visible = true;
         venus.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
         
         if(venus.isTouching(rocket)){
             gameState = restart;
             venus.destroy();
             resetState = venusr;
             
 
         }
 }

 function Earth(){
    background(0);
 
         
         earth.visible = true;
         earth.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
         
         if(earth.isTouching(rocket)){
             gameState = restart;
             earth.destroy();
             resetState = earthr;
             
 
         }
 }

