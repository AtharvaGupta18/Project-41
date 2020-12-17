class Umbrella {
	constructor(x, y, r) {
		var options = {
			isStatic: true,
			density: 0.5
		}

		this.image = loadImage("images/Walking Frame/walking_1.png");

		this.r = r;
		this.x = x;
		this.y = y;

		this.body = Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}

	display() {
		var pos = this.body.position;

		ellipseMode(RADIUS);
		fill("white");
		ellipse(this.x + 5  , this.y + 70, this.r + 20, this.r + 30);
		imageMode(CENTER);
		image(this.image, pos.x, pos.y + 70, 300, 200);
	}
}
	
