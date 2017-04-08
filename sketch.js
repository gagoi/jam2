var timer;

function setup() {
	timer = new Timer();
	timer.start();
}

function draw() {
	clear();
	text(timer.getDraw(), 20, 20);
}

function mousePressed() {
	timer.stop();
	print("Yolo");
}
