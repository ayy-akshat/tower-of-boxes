class Ground
{
    constructor(x, y, width, height, color)
    {
        var bodyOptions=
        {
            frictionAir:0,
            friction:1,
            frictionStatic:0,
            isStatic:true
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,bodyOptions);
        World.add(world,this.body);
        this.color = color;
    }

    display()
    {
        rectMode(CENTER);
        noStroke();
        push();
        fill(this.color);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}