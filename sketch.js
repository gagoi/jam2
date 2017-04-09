var timer;
var run = true;
var music = new Music("resources/sounds/musics/", 3);
var sound = new Sound("resources/chapters/");
var menu = new Menu();
var textureLoader = new TextureLoader();
var typeMenu = "mainMenu";

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
	player = new Player("sgfkehkgf", 10);
	player.initPos(20,500);
	player.setyAcc(1);
}

function draw() {
	clear();
	changeMenu();
	music.volume(0.0);
	music.play();
	//background(253, 108, 158);
	//rect(player.getxPos(), player.getyPos(), 100, 100);
	if(run)
		player.update();
	if(player.getyPos() >= 500)
		player.setyVel(-30);

	text(timer.getDraw(), 20, 20);
	image(textureLoader.getImage('A'),0,0);
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
