class TextureLoader{
	constructor(){
		this.textureMap = new Map();
		this.charMap = new Map();
	}

	getImage(code){
		return this.textureMap.get(this.charMap.get(code));
	}


	addImage(code, path, name){
		print(path + name + ".png");
		this.textureMap.set(name, loadImage(path + name + ".png"));
		this.charMap.set(code, name);
	}

	load(){
		this.addImage('A', "resources/textures/blocks/", "sky");
		this.addImage('B', "resources/textures/blocks/", "dirt");
		this.addImage('C', "resources/textures/blocks/", "grass");
		this.addImage('D', "resources/textures/blocks/", "wood");
		this.addImage('E', "resources/textures/blocks/", "leaves");
		this.addImage('F', "resources/textures/blocks/", "leaves");
		this.addImage('G', "resources/textures/blocks/", "leaves");
	}
}
