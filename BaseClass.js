class BaseClass
{
    constructor(x, y, width, height)
    {
        var bodyOptions=
        {
            restitution:0.67,
            frictionAir:0,
            friction:1,
            frictionStatic:1,
            density:1
        }

        this.initialX = x;
        this.initialY = y;
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,bodyOptions);
        World.add(world,this.body);
    }

    display(color)
    {
        rectMode(CENTER);

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(180*angle/PI);
        fill(color);
        rect(0, 0, this.width, this.height);
        pop();
    }

    resetPosition()
    {
        Matter.Body.setPosition(this.body, {x:this.initialX, y:this.initialY});
        Matter.Body.setVelocity(this.body, {x:0, y:0});
        Matter.Body.setAngle(this.body, 0);
        Matter.Body.setAngularVelocity(this.body, 0);
    }
}