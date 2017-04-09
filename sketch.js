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
	createCanvas(2000, 1000);
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
