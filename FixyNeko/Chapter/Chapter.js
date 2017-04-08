var level = [[]];
var xBegin, yBegin;
var xEnd, yEnd;

function loadLevel(chap, lvl){
	var levelText, rawFile = new XMLHttpRequest();
	rawFile.open("GET", "resources/chapters/" + chap + "/lvl_" + lvl + ".lvl", false);
	rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                levelText = rawFile.responseText;
            }
		}
	};
	rawFile.send(null);
	var map = levelText.replace(/[^]*:[^\n]*\n/, "");
	var param = levelText.replace(map, "");

	var height = occurrences(map, "\n", false) + 1;
	var width = map.search("\n") + 1;

	level = new Array(width);
	for(var x = 0; x < width; x++) {
		level[x] = new Array(height);
		for(var y = 0; y < height; y++) {
			level[x][y] =  map.charAt(y * (width + 1) + x);
		}
	}

}

function occurrences(string, subString, allowOverlapping) {
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
