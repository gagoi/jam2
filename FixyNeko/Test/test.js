var textureLoader, game;

function setup() {
	createCanvas(2000, 1000);

	game = new Game();

	textureLoader = new TextureLoader();
	textureLoader.load();

	game.init();

}

function draw() {
	game.update();
	game.render(textureLoader);
}
