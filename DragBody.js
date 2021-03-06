class DragBody extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 100, 100);
        this.image = loadImage('polygon.png');
    }

    move()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }

    display()
    {
        imageMode(CENTER);

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(180*angle/PI);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
