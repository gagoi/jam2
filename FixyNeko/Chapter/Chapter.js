class Chapter{
	constructor(){
		this.level = [[]];
		this.xBegin, this.yBegin, this.xEnd, this.yEnd, this.height, this.width;
	}

	loadLevel(chap, lvl){
		var levelText, rawFile = new XMLHttpRequest();
		rawFile.open("GET", "resources/chapters/" + chap + "/lvl_" + lvl + ".lvl", false);
		rawFile.onreadystatechange = function() {
			if (rawFile.readyState === 4) {
				if(rawFile.status === 200 || rawFile.status == 0) {
					levelText = rawFile.responseText;
				}
			}
		};
		rawFile.send(null);
		var map = levelText.replace(/[^]*:[^\n]*\n/, "");
		var param = levelText.replace(map, "");

		this.height = this.occurrences(map, "\n", false);
		this.width = map.search("\n");

		this.level = new Array(this.width);
		for(var x = 0; x < this.width; x++) {
			this.level[x] = new Array(this.height);
			for(var y = 0; y < this.height; y++) {
				this.level[x][y] =  map.charAt(y * (this.width + 1) + x);
			}
		}

		//Parameters parse

//		this.xBegin = parseInt(param.match(/in_x=\d*/).match(/\d*/));
//		this.yBegin = parseInt(param.match(/in_y=\d*/).match(/\d*/));
//		this.xEnd = parseInt(param.match(/out_x=\d*/).match(/\d*/));
//		this.yEnd = parseInt(param.match(/out_y=\d*/).match(/\d*/));

//		var item ;

	}

	getCaseId(x, y){
		return this.level[x][y];
	}

	getMapHeight(){
		return this.height;
	}

	getMapWidth(){
		return this.width;
	}

	getxBegin() {
		return this.xBegin;
	}
	getyBegin() {
		return this.yBegin;
	}
	getxEnd() {
		return this.xEnd;
	}
	getyEnd() {
		return this.yEnd;
	}

	setxBegin(val) {
		this.xBegin = val;
	}
	setyBegin(val) {
		this.yBegin = val;
	}
	setxEnd(val) {
		this.xEnd = val;
	}
	setyEnd(val) {
		this.yEnd = val;
	}

	render(textureLoader) {
		for(var y = 0; y < this.getMapHeight(); y++)
			for(var x = 0; x < this.getMapWidth(); x++){
				image(textureLoader.getImage(this.level[x][y]), x*32, y*32);
			}
	}

	occurrences(string, subString, allowOverlapping) {
		string += "";
		subString += "";
		if (subString.length <= 0) return (string.length + 1);

		var n = 0,
			pos = 0,
			step = allowOverlapping ? 1 : subString.length;

		while (true) {
			pos = string.indexOf(subString, pos);
			if (pos >= 0) {
				++n;
				pos += step;
			} else break;
		}
		return n;
	}
}
