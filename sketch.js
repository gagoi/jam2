var timer;
var run = true;
var music = new Music("resources/sounds/musics/", 3);

function preload(){
	music.load()
}

function setup() {
	music.volume(0.1);
	createCanvas(5000, 5000);
	timer = new Timer();
	timer.start();
	player = new Player("sgfkehkgf", 10);
	player.initPos(20,500);
	player.setyAcc(1);
	loadLevel("lvl_0");
}

function draw() {
	clear();
	music.play();
	background(253, 108, 158);
	rect(player.getxPos(), player.getyPos(), 100, 100);
	if(run)
		player.update();
	if(player.getyPos() >= 500)
		player.setyVel(-30);

	text(timer.getDraw(), 20, 20);
}

function mousePressed() {
	run = !run;
	run ? timer.start() : timer.stop();
	print(run);
}
