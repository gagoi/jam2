class Timer {
    constructor(){
        this.date = new Date();
        this.reset();
    }

    reset(){
        this.time = this.date.getTime();
		this.run = false;
    }

    start(){
        this.time = this.date.getTime();
		this.run = true;
    }

	stop(){
		this.run = false;
	}

	getTime(){
		this.date = new Date();
		if (this.run) {
			var tmp = this.date.getTime()-this.time;
			return(tmp);
		}
		else {
			return(this.time);
		}
	}

	add(addTime){
		this.time += addTime;
	}

	getDraw(){
		var tmp = this.getTime();
		var msec = Math.floor((tmp%1000)/10);
		var sec = Math.floor((tmp/1000)%60);
		var min = Math.floor(((tmp/1000)/60)%60);

		return(String(min) + " : " + String(sec) + " : " + String(msec));
	}

}
