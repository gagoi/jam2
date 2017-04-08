var timer;
var run = true;

function setup() {
	createCanvas(5000, 5000);
	timer = new Timer();
	timer.start();
	player = new Player("sgfkehkgf", 10);
	player.initPos(20,0);
	player.setyAcc(1);
}

function draw() {
	clear();
	background(253, 108, 158);
	rect(player.getxPos(), player.getyPos(), 100, 100);
	if(run)
		player.update();
	if(player.getyPos() >= 1000)
		player.setyPos(0);

	text(timer.getDraw(), 20, 20);
}

function mousePressed() {
	run = !run;
	run ? timer.start() : timer.stop();
	print(run);
}
