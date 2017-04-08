class Timer {
    constructor(){
        this.reset();
    }

    reset(){
		this.date = new Date()
        this.time = this.date.getTime();
		this.run = false;
		this.currentTime = 0;
    }

    start(){
		this.date = new Date();
        this.time = this.date.getTime()-this.currentTime;
		this.run = true;
    }

	stop(){
		this.date = new Date();
		this.currentTime = this.date.getTime()-this.time;
		this.run = false;
	}

	getTime(){
		this.date = new Date();
		if (this.run) {
			var tmp = this.date.getTime()-this.time;
			return(tmp);
		}
		else {
			return(this.currentTime);
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

		if(msec<10){
			msec = "0"+String(msec);
		}
		else {
			msec = String(msec)
		}
		if(sec<10){
			msec = "0"+String(sec);
		}
		else {
			sec = String(sec)
		}
		if(min<10){
			msec = "0"+String(min);
		}
		else {
			min = String(min)
		}

		return(min + " : " + sec + " : " + msec);
	}

}
