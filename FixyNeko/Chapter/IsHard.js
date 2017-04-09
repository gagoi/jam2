var hard = {
	"A": false,
	"B": true,
	"C": true,
	"D": false,
	"E": false
};

function isHard(stringId){
	return hard[stringId];
}

function setHardness(stringId, val){
	hard[stringId] = val;
}
