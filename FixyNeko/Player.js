class Player {
	constructor(texturePath, ghostDelta){
		Entity.call(texturePath);
		this.ghostDelta = ghostDelta;
		this.pos = new Array(ghostDelta);
		for(i = 0; i < ghostDelta; i++){
			this.pos[i] = new Array(2);
		}
		this.currentPos = 0;
	}

	void initPos(x, y) {
		this.xPos = x;
		this.yPos = y;
		for(i = 0; i < this.ghostDelta; i++) {
			this.pos[i] = [x, y];
		}
	}

	void logPos(){
		this.currentPos = (currentPos + 1) % (ghostDelta - 1);
		this.pos[this.currentPos] = [this.xPos, this.yPos];
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
