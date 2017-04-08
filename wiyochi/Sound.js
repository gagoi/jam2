class Sound{
	constructor(){
		this.nbSound = 1;
		this.path = "resources/sounds/";
		this.pathArray = new Array();

		for (var i=0; i<this.nbSound; i++){
			this.pathArray.push(path + "lvl_" + String(i) + ".mp3");
		}

		this.soundArray = new Array();
	}

	load(){
		for(var i=0; i<this.nbSound; i++){
			this.soundArray.push(loadSound(this.pathArray[i]));
		}
	}

	volume(newVolume){
		for(var i=0; i<this.nbSound; i++){
			this.soundArray[i].setVolume(newVolume);
		}
	}

	play(nlvl){
		this.soundArray[nlvl].play();
	}
}
