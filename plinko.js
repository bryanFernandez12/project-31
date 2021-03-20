class Plinko {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':2.1,
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      //this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipse(RADIUS)
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
      pop();
    }
  };