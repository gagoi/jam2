class Sound{
	constructor(path){
		this.nbSound = 1;
		this.path = path;
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
		if (!this.soundArray[nlvl].isPlaying()){
			this.soundArray[nlvl].play();
		}
	}
}
