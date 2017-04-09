class Entity {
	constructor(texturePath){
		this.textureName = texturePath.replace(/[^\/]*$/, "");
		this.path = texturePath.replace(this.textureName, "");

		this.xVel = 0;
		this.yVel = 0;
		this.xAcc = 0;
		this.yAcc = 0;
		this.xPos = 0;
		this.yPos = 0;

		this.width = 32;
		this.height = 32;

		this.applyGravity = false;
	}

	update() {
		this.xVel += this.xAcc;
		this.yVel += this.yAcc;
		this.xPos += this.xVel;
		this.yPos += this.yVel;
	}

	setxAcc(val){
		this.xAcc = val;
	}
	setyAcc(val){
		this.yAcc = val;
	}
	setxVel(val){
		this.xVel = val;
	}
	setyVel(val){
		this.yVel = val;
	}
	setxPos(val){
		this.xPos = val;
	}
	setyPos(val){
		this.yPos = val;
	}

	setWidth(val){
		this.width = val;
	}
	setHeight(val){
		this.height = val;
	}

	getxAcc(){
		return(this.xAcc);
	}
	getyAcc(){
		return(this.yAcc);
	}
	getxVel(){
		return(this.xVel);
	}
	getyVel(){
		return(this.yVel);
	}
	getxPos(){
		return(this.xPos);
	}
	getyPos(){
		return(this.yPos);
	}

	getWidth(){
		return this.width;
	}
	getHeight(){
		return this.height;
	}
}
