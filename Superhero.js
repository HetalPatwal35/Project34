class Superhero{
    constructor(x, y, width, height, angle) {
        var options = {
            'frictionAir':1,
            'density':1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.hero2=loadImage("images/Superhero-02.png");
        this.hero1=loadImage("images/Superhero-01.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        image(this.hero2, )
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
      }
  }