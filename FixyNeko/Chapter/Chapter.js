var level = [[]];
var xBegin, yBegin;
var xEnd, yEnd;

function loadLevel(lvl){
	var levelText;
    var rawFile = new XMLHttpRequest();
	rawFile.open("GET", "resources/chapters/0/"+lvl+".lvl", false);
	rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                levelText = rawFile.responseText;
            }
		}
	}
	rawFile.send(null);
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                fileDisplayArea.innerText = allText;
            }
        }
    }
    rawFile.send(null);
}
