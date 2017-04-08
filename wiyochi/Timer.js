class Timer {
    constructor(){
        this.reset();
    }

    reset(){
		this.date = new Date()
        this.time = this.date.getTime();
		this.run = false;
		this.pause = 0;
    }

    start(){
		this.date = new Date();
        this.time = this.date.getTime()-this.pause;
		this.run = true;
    }

	stop(){
		this.date = new Date();
		this.pause = this.date.getTime()-this.time;
		this.run = false;
	}

	getTime(){
		this.date = new Date();
		if (this.run) {
			var tmp = this.date.getTime()-this.time;
			return(tmp);
		}
		else {
			return(this.pause);
		}
	}

	add(addTime){
		this.time -= addTime;
	}

	getDraw(){
		var tmp = this.getTime();
		var msec = Math.floor((tmp%1000)/10);
		var sec = Math.floor((tmp/1000)%60);
		var min = Math.floor(((tmp/1000)/60)%60);

		return(String(min) + " : " + String(sec) + " : " + String(msec));
	}

}
