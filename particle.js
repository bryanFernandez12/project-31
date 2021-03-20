class Particle {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
         // 'density':2.1
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      //this.image = loadImage("paper.png");
      this.color = color(random (0, 255), random(0, 255), random(0, 255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     ellipse(RADIUS)
   //   strokeWeight(4);
   //   stroke("");
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
      pop();
    }
  };