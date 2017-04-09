class Menu{
	constructor(){
		this.b1 = new MenuButton("newGameButton", "NewGame", 300, 200, 200, 50);
		this.b2 = new MenuButton("otherMenu", "SelectLvl", 300, 300, 200, 50);
	}

	render(){
		clear();
		this.b1.render();
		this.b2.render();
	}

	mouse(x, y){
		this.b1.mousePressed(x, y);
		this.b2.mousePressed(x, y);
	}
}

class LevelMenu{
	constructor(){
		this.nbChap = 5;
		this.nbLvl = 10;
		this.buttonArray = new Array();
		for (var i=0; i<this.nbChap; i++){
			this.buttonArray.push(new Array());
			for (var j=0; j<this.nbLvl; j++){
				var str = "Chapter " + String(i) + " Level " + String(j)
				this.buttonArray[i].push(new MenuButtonLevel("levelButton", str, 20+i*200, 50+j*110, 150, 20, i, j));
			}
		}
	}

	render(){
		for (var i=0; i<this.nbChap; i++){
			for (var j=0; j<this.nbLvl; j++){
				this.buttonArray[i][j].render();
			}
		}
	}

	mouse(x, y){
		for (var i=0; i<this.nbChap; i++){
			for (var j=0; j<this.nbLvl; j++){
				this.buttonArray[i][j].mousePressed(x, y);
			}
		}
	}
}















