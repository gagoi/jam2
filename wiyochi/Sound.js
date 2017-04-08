class Sound{
	constructor(){
		this.nbSound = 1;
		this.path = "resources/chapters/0/";
		this.pathArray = new Array();

		for (var i=0; i<this.nbSound; i++){
			this.pathArray.push(this.path + "lvl_" + String(i) + ".mp3");
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
