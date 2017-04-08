var timer;

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
	text(timer.getDraw(), 20, 20);
	rect(player.getxPos(), player.getyPos(), 100, 100);
	player.update();
	if(player.getyPos() >= 1000)
		player.setyPos(0);
}

function mousePressed() {
	timer.stop();
	print("Yolo");
}
