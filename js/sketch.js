const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4;
var walking1, walking2, walking3, walking4, walking5, walking6, walking7, walking8;
var rain;
var drop = [];
var umbrella;
var thunder;
var rand;
function preload() {
	thunderbolt1 = loadImage("images/thunderbolt/1.png");
	thunderbolt2 = loadImage("images/thunderbolt/2.png");
	thunderbolt3 = loadImage("images/thunderbolt/3.png");
	thunderbolt4 = loadImage("images/thunderbolt/4.png");

	walking1 = loadImage("images/Walking Frame/walking_1.png");
	walking2 = loadImage("images/Walking Frame/walking_2.png");
	walking3 = loadImage("images/Walking Frame/walking_3.png");
	walking4 = loadImage("images/Walking Frame/walking_4.png");
	walking5 = loadImage("images/Walking Frame/walking_5.png");
	walking6 = loadImage("images/Walking Frame/walking_6.png");
	walking7 = loadImage("images/Walking Frame/walking_7.png");
	walking8 = loadImage("images/Walking Frame/walking_8.png");

}

function setup() {
	createCanvas(400, 700);

	engine = Engine.create();
	world = engine.world;

	umbrella = new Umbrella(195, 500, 50);

}

function draw() {
	background("black");

	Engine.update(engine);

	if(frameCount % 80 === 0){
		thunder = createSprite(200, 0, 10, 10);
		thunder.scale = 0.6;
		rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunderbolt1);
            break;
            case 2: thunder.addImage(thunderbolt2);
            break; 
            case 3: thunder.addImage(thunderbolt3);
            break;
            case 4: thunder.addImage(thunderbolt4);
            break;
            default: break;
        }
	}

	if(frameCount % 12 === 0 && thunder){
        thunder.destroy();
	}
	
	if(frameCount % 10 === 0){
		for(var a = 0; a < 100; a++){
			drop.push(new Drop(random(10, 390), random(-50, 0), 5));
		}
	}	

	for(var b = 0; b < drop.length; b++){
		drop[b].display();
			 
	}	

	umbrella.display();

	drawSprites();
}

