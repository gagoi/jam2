class Sound{
	constructor(path){
		this.nblvl = 10;
		this.nbchap = 1;
		this.path = path;
		this.pathArray = new Array();
		this.soundArray = new Array();

		for (var i=0; i<this.nblvl; i++){
			this.pathArray.push(new Array());
			this.soundArray.push(new Array());
		}
		for (var i=0; i<this.nbchap; i++){
			for (var j=0; j<this.nblvl; j++)
				this.pathArray[i].push(this.path + String(i) + "/" + "lvl_" + String(j) + ".mp3");
		}
	}

	load(){
		for(var i=0; i<this.nbchap; i++){
			for(var j=0; j<this.nblvl; j++){
				this.soundArray[i].push(loadSound(this.pathArray[i][j]));
			}
		}
	}

	volume(newVolume){
		for(var i=0; i<this.nbSound; i++){
			for(var j=0; j<this.nblvl; j++){
				this.soundArray[i][j].setVolume(newVolume);
			}
		}
	}

	play(nchapter, nlvl){
		if (!this.soundArray[nchapter][nlvl].isPlaying()){
			this.soundArray[nchapter][nlvl].play();
		}
	}
}
