class Game{

	constructor(){
		this.updateList = [];
		this.playerw = 32;
		this.playerh = 32;
		var ghostNum = 0;

		this.chapter = new Chapter();

		//chargement textures
		this.playerTexture = "resources/textures/blocks/";
		this.player = new Player(this.playerTexture, ghostNum);
		this.player.setxPos(this.chapter.getxBegin());
		this.player.setyPos(this.chapter.getyBegin());

		this.player.setyPos(20);
		this.player.setxPos(20);

		this.player.setyAcc(1);
		this.player.setWidth(this.playerw);
		this.player.setHeight(this.playerh);
		this.updateList[this.updateList.length] = this.player;

		this.selectLevel(0,4);
	}

	update() {
		//collision
		var casePos = this.getCaseFromChoords(this.player.getxPos() + this.player.getWidth() / 2, this.player.getyPos() + this.player.getHeight() / 2);

		this.player.update();

		if(casePos[1] > 0 && isHard(this.chapter.getCaseId(casePos[0], casePos[1] - 1))) //has a (hard) block on top of it
			if(collideRectRect(casePos[0] * 32, (this.casePos[1] - 1) * 32, 32, 32, this.player.getxPos(), this.player.getyPos(), this.player.getWidth(), this.player.getHeight())){
				this.player.setyPos(this.casePos[1] * 32);
				this.player.setyVel(0);
			}
		if(casePos[1] < this.chapter.getMapHeight() - 1 && isHard(this.chapter.getCaseId(casePos[0], casePos[1] + 1))) //has a (hard) block on bottom of it
			if(collideRectRect(casePos[0] * 32, (casePos[1] + 1) * 32, 32, 32, this.player.getxPos(), this.player.getyPos(), this.player.getWidth(), this.player.getHeight())){
				this.player.setyPos((casePos[1] + 1) * 32 - this.player.getHeight());
				this.player.setyVel(0);
			}
		if(casePos[0] >= 1 && isHard(this.chapter.getCaseId(casePos[0] - 1, casePos[1]))) //has a (hard) block on left of it
			if(collideRectRect((casePos[0] - 1) * 32, casePos[1] * 32, 32, 32, this.player.getxPos(), this.player.getyPos(), this.player.getWidth(), this.player.getHeight())){
				this.player.setxPos(casePos[0] * 32);
				this.player.setxVel(0);
			}
		if(casePos[0] >= this.chapter.getMapWidth() - 1 && isHard(this.chapter.getCaseId(casePos[0] + 1, casePos[1]))) //has a (hard) block on right of it
			if(collideRectRect((casePos[0] + 1) * 32, casePos[1] * 32, 32, 32, this.player.getxPos(), this.player.getyPos(), this.player.getWidth(), this.player.getHeight())){
				this.player.setxPos((casePos[0] + 1) * 32 - this.player.getWidth());
				this.player.setxVel(0);
			}
	}

	render(textureLoader) {
		this.chapter.render(textureLoader);
		for(var toUpdate in this.updateList){
			//toUpdate.render(textureLoader);
		}
		this.player.render(textureLoader);

	}

	getCaseFromChoords(x, y){
		var t = [floor(max(0, min(x / 32, this.chapter.getMapWidth()))), floor(max(0, min(y / 32, this.chapter.getMapHeight())))]
		return(t);
	}

	selectLevel(chap, lvl) {
		this.chapter.loadLevel(chap, lvl);
	}
}
