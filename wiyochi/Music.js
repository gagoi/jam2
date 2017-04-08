class Music{
	constructor(path, nbMusic){
		this.nbMusic = nbMusic;
		this.arrayPath = new Array();

		for (var i=0; i<nbMusic; i++){
			this.arrayPath.push(path + "song" + String(i) + ".mp3");
		}

		this.arrayMusic = new Array();
		this.random = -1;
	}

	load(){
		for(var i=0; i<(this.nbMusic); i++){
			this.arrayMusic.push(loadSound(this.arrayPath[i]));
		}
	}

	volume(newVolume){
		for(var i=0; i<(this.nbMusic); i++){
			this.arrayMusic[i].setVolume(newVolume);
		}
	}

	playMusic(){
		var rand;
		do {
			rand = Math.random() * this.arrayMusic.length();
		} while(rand==this.random);
		this.random = rand;
		this.arrayMusic[this.random].play();
	}

	play(){
		var isArrayMusicPlaying = false;
		for (var i=0; i<this.nbMusic; i++){
			if (this.arrayMusic[i].isPlaying()){
				isArrayMusicPlaying = true;
			}
		}
		if (!isArrayMusicPlaying){
			this.playMusic();
		}
	}
}
