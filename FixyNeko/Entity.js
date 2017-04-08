class Entity {
	constructor(string texturePath){
		this.textureName = texturePath.replace(/[^\/]*$/, "");
		this.path = texturePath.replace(textureName, "");

		this.xVel = 0;
		this.yVel = 0;
		this.xAcc = 0;
		this.yAcc = 0;
		this.xPos = 0;
		this.yPos = 0;

		this.applyGravity = false;
	}

	void update() {
		this.xVel += this.xAcc;
		this.yVel += this.yAcc;
		this.xPos += this.xVel;
		this.yPos += this.yVel;
	}

	void setxAcc(val){
		this.xAcc = val;
	}
	void setyAcc(val){
		this.yAcc = val;
	}
	void setxVel(val){
		this.xVel = val;
	}
	void setyVel(val){
		this.yVel = val;
	}
	void setxPos(val){
		this.xPos = val;
	}
	void setyPos(val){
		this.yPos = val;
	}

	float getxAcc(){
		return(this.xAcc);
	}
	float getyAcc(){
		return(this.yAcc);
	}
	float getxVel(){
		return(this.xVel);
	}
	float getyVel(){
		return(this.yVel);
	}
	float getxPos(){
		return(this.xPos);
	}
	float getyPos(){
		return(this.yPos);
	}
}
