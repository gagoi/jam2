function setup() {
	var txt = ":item=<ladder, x, y, t>:item=<door, x, y, network, [in(0), out(1)], [red(0), blue(1), purple(2)]>:item=<swap, x, y>"

	var items = [];
	items = txt.match(/:item=<[a-z0-9, ]*>/);
	for(var i = 0; i < items.length; i++){
		print(items[i]);
		items[i] = items[i].match(/<[a-z0-9, ]*>/)[0];
		print(items[i]);
		items[i] = items[i].match(/[a-z0-9, ]*/);
	}

	var params = new Array(items.length);
	for(var i = 0; i < items.length; i++){
		params[i] = items[i].match(/ ?[a-z\d]*,?/).match(/[^ ,]/);
	}
	print(params);
}

function draw() {
}
