class Player extends Entity{
	constructor(texturePath, ghostDelta){
		super(texturePath);
		this.ghostDelta = ghostDelta;
		this.pos = new Array(ghostDelta);
		for(var i = 0; i < ghostDelta; i++){
			this.pos[i] = new Array(2);
		}
		this.currentPos = 0;
	}

	initPos(x, y) {
		this.xPos = x;
		this.yPos = y;
		for(var i = 0; i < this.ghostDelta; i++) {
			this.pos[i] = [x, y];
		}
	}

	logPos(){
		this.currentPos = (currentPos + 1) % (ghostDelta - 1);
		this.pos[this.currentPos] = [this.xPos, this.yPos];
	}
}
