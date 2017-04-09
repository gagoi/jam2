var updateList = [];

function init() {
	var playerw = 32;
	var playerh = 32;

	//chargement textures
	var playerTexture;
	player = new Player(playerTexture, getGhostsNum);
	player.setxPos(getxBegin());
	player.setyPos(getyBegin());
	player.setyAcc(9.8);
	player.setWidth(playerw);
	player.setHeight(playery);
	updateList[updateList.length] = player;
}

function update() {

}

function render() {

}

function selectLevel(chapter, level) {
	loadLevel(chapter, level);
}
