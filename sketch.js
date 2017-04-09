var timer;
var run = true;
var music = new Music("resources/sounds/musics/", 3);
var sound = new Sound("resources/chapters/");
var menu = new Menu();
var textureLoader = new TextureLoader();
var typeMenu = "mainMenu";

var game;

function preload(){
	music.load();
	sound.load();
	textureLoader.load();
}

function setup() {
	print("setup");
	createCanvas(1000, 700);
	timer = new Timer();
	timer.start();
	timer.setTimeMax(180000);
	game = new Game();
}

function draw() {
	game.update();
	clear();
	game.render(textureLoader);
}

function mousePressed() {
	run = !run;
	run ? timer.start() : timer.stop();
	menu.mouse(mouseX, mouseY);
}

function keyPressed() {
	switch(keyCode){
		case UP_ARROW:
			game.player.setyVel(-15);
			break;
		case LEFT_ARROW:
			game.player.setxVel(game.player.getxVel() - 5);
			break;
		case RIGHT_ARROW:
			game.player.setxVel(game.player.getxVel() + 5);
			break;
	}
}

function keyReleased() {
	switch(keyCode){
		case LEFT_ARROW:
			game.player.setxVel(game.player.getxVel() + 5);
			break;
		case RIGHT_ARROW:
			game.player.setxVel(game.player.getxVel() - 5);
			break;
	}
}

function selectLevel(chapter, level){
	sound.volume(1);
	sound.play(chapter, level);
}

function changeMenu(){
	if (typeMenu == "mainMenu"){
		menu.render();
	}
	else if (typeMenu == "changingMenu"){
		delete menu;
		menu = new LevelMenu();
		typeMenu = "levelMenu";
	}
	else {
		menu.render();
	}
}
