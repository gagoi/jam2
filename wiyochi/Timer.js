class Timer {
    constructor(){
        this.date = new Date();
		this.run = false;
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
        this.time = this.date.getTime();
		this.run = false;
	}

	getTime(){
		if (this.run) {
			this.time += this.date.getTime();
			return(this.time);
		}
		else {
			return(this.time);
		}
	}

	add(addTime){
		this.time += addTime;
	}

	getDraw(){
		this.time = this.getTime();
		var msec = this.time%1000;
		var sec = Math.floor((this.time/1000)%60);
		var min = Math.floor(((this.time/1000)/60)%60);

		return(String(min) + " : " + String(sec) + " : " + String(msec));
	}

}


function test(texte){
	time = new Timer();
	var tTime = document.getElementById(texte);

	time.start();
	setTimeout(function() {lambda(tTime, time)}, 1000);
}

function lambda(tTime, time){
	time.add(5000);
	alert(time.getDraw());
	tTime.textContent = time.getDraw();
	time.stop();
	tTime.textContent = time.getDraw();
}








