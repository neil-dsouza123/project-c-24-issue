class Iron{
	constructor(x,y,width,height)
	{

		var options={
			'restitution':0.8,
			'friction':3,
			'density':30
		}

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");

			rect(pos.x,pos.y,this.width,this.heigh)

			pop()
	}
