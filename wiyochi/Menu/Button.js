class MenuButton{
	constructor(type, name, x, y, tx, ty){
		this.type = type;
		this.name = name;
		this.x = x;
		this.y = y;
		this.tailleX = tx;
		this.tailleY = ty;
	}

	render(){
		rect(this.x, this.y, this.tailleX, this.tailleY);
		text(this.name, this.x+20, this.y+12);
	}

	mousePressed(mouseX, mouseY){
		if (mouseX>this.x && mouseX<(this.x+this.tailleX) && mouseY>this.y && mouseY<(this.y+this.tailleY)) {
			this.select();
		}
	}

	select(){
		if (this.type=="otherMenu"){
			typeMenu = "changingMenu"
		}
		else if (this.type=="levelButton"){
			print("test");
		}
		else {
			print("New Game");
		}
	}
}

class MenuButtonLevel extends MenuButton{
	constructor(type, name, x, y, tx, ty, chap, lvl){
		super(type, name, x, y, tx, ty);
		this.chapter = chap;
		this.level = lvl;
	}

	select(){
		if (this.type=="otherMenu"){
			typeMenu = "changingMenu"
		}
		else if (this.type=="levelButton"){
			print(this.chapter);
			print(this.level);
		}
		else {
			print("New Game");
		}
	}






}
