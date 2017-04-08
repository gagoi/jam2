class Timer {
    constructor(){
        this.reset();
    }

    reset(){
		this.run = false;
		this.currentTime = 0;
		this.timeMax = 0;
    }

    start(){
		if(!this.run){
			this.date = new Date();
			this.time = this.date.getTime()-this.currentTime;
			this.run = true;
		}
		else{
			this.reset();
			this.start();
		}
    }

	stop(){
		this.date = new Date();
		this.currentTime = this.date.getTime()-this.time;
		this.run = false;
	}

	//Return timer in milliseconds
	getTime(){
		this.date = new Date();
		if (this.run) {
			var tmp = this.date.getTime()-this.time;
			return(this.timeMax-tmp);
		}
		else {
			return(this.timeMax-this.currentTime);
		}
	}

	//Add time in milliseconds
	add(addTime){
		this.time -= addTime;
	}

	//Starting time in milliseconds
	setTimeMax(timeMax){
		this.timeMax = timeMax;
	}

	//Return timer in String format: "+- min : sec : msec"
	getDraw(){
		var tmp = this.getTime();
		var negative = false;
		if (tmp<0){
			tmp = -tmp;
			negative = true;
		}
		var msec = Math.floor((tmp%1000)/10);		//Transform
		var sec = Math.floor((tmp/1000)%60);		//into form
		var min = Math.floor(((tmp/1000)/60)%60);	//min:sec:msec

		//Set to 0x:0x:0x (ex: 04:05:07)
		if(msec<10){
			msec = "0"+String(msec);
		}
		else {
			msec = String(msec)
		}
		if(sec<10){
			sec = "0"+String(sec);
		}
		else {
			sec = String(sec)
		}
		if(min<10){
			min = "0"+String(min);
		}
		else {
			min = String(min)
		}

		if (negative){
			return("- " + min + " : " + sec + " : " + msec);
		}
		else{
			return(min + " : " + sec + " : " + msec);
		}
	}

}
