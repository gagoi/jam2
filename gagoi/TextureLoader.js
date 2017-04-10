class TextureLoader{
	constructor(){
		this.textureMap = new Map();
		this.charMap = new Map();
	}

	getImage(code){
		if(this.textureMap.get(this.charMap.getCode(code)) != "undifined")
			return this.textureMap.get(this.charMap.get(code));
		else
			return this.textureMap.get("sky");
	}

	getImageByName(name){
		if(this.textureMap.get(name) != "undifined")
			return this.textureMap.get(name);
		else
			return this.textureMap.get("sky");
	}


	addImage(code, path, name){
		print(path + name + ".png");
		this.textureMap.set(name, loadImage(path + name + ".png"));
		this.charMap.set(code, name);
	}

	load(){
		this.addImage('A', "resources/textures/blocks/", "sky");
		this.addImage('C', "resources/textures/blocks/", "dirt");
		this.addImage('B', "resources/textures/blocks/", "grass");
		this.addImage('D', "resources/textures/blocks/", "wood");
		this.addImage('E', "resources/textures/blocks/", "leaves");
		this.addImage('F', "resources/textures/blocks/", "ground");
		this.addImage('G', "resources/textures/blocks/", "leaves");
		this.addImage('?', "resources/textures/player/", "left_0");
		this.addImage('?', "resources/textures/player/", "left_1");
		this.addImage('?', "resources/textures/player/", "left_2");
		this.addImage('?', "resources/textures/player/", "right_0");
		this.addImage('?', "resources/textures/player/", "right_1");
		this.addImage('?', "resources/textures/player/", "right_2");
	}
}
