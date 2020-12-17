class Drop {
	constructor(x, y, r){

		var options = {
			isStatic: false,
			density: 0.1,
			restitution: 1,
			friction: 0.2
		}
		this.x = x;
		this.y = y;
		this.r = r;

		this.body = Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body)
	}

	display(){

		var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();

	}
}