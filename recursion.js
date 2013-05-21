var range = function(start, stop) {
	if(start === stop) {
		return [];
	}
	else if (start + 1 === stop) {
		return [];
	}
	else {
		var x = range(start + 1, stop);
		return [start + 1] + x;
	}
};
//
// console.log(range(0,11));

var sumArray = function (a) {
	var sum = 0;
	for (i = 0; i < a.length; i++) {
		sum = sum + a[i];
	}
	return sum;
};

var a = [1,2,3,4,6,3,10];

// console.log(sumArray(a));

var sumArrayRec = function(a) {
	if(a.length === 0) {
		return 0;
	}
	else if(a.length === 1) {
		return(a[0]);
	}
	else {
		var x = sumArrayRec(a.slice(1,a.length));
		return a[0] + x
	}
};

// console.log(sumArray(a));

var exp1 = function(b,p) {
	if(p === 0) {
		return 1;
	}
	else {
		return b * exp1(b, p-1);
	}
};

// console.log(exp1(3,4));

var exp2 = function(b,p) {
	if(p === 0) {
		return 1;
	}
	else if(p % 2 === 0) {
		return (exp2(b, p/2))*(exp2(b, p/2));
	}
	else {
		return b * (exp2(b, (p-1)/2))*(exp2(b, (p-1)/2));
	}
};

// console.log(exp2(2,7));

var fibIt = function (n) {
	if (n === 0) {
		return [];
	}
	if (n === 1) {
		return [0];
	}
	var res = [0,1];
	for (i = 0; i < n - 2; i++) {
		res.push(res[i]+res[i+1]);
	}
	return res;
};

// console.log(fibIt(10));

var fibRec = function (n) {
	if (n === 0) {
		return [];
	}
	else if (n === 1) {
		return [0];
	}
	else if (n === 2) {
		return [0,1];
	}
	else {
		// var res = fibRec(n-1)[n-2] + fibRec(n-1)[n-3];
		// return fibRec(n-1).push(res);
		x = fibRec(n-1);
		return x.concat([(x[x.length-1] + x[x.length-2])]);
	}
};


// console.log(fibRec(10));

var bSearch = function(arr, t) {
	if(arr.length === 0) {
		return null;
	}
	else {
		mid = Math.floor(arr.length/2)
		if(t === arr[mid]) {
			return mid;
		}
		else if(t < arr[mid]) {
			return (bSearch(arr.slice(0,mid), t));
		}
		else {
			return (mid + bSearch(arr.slice(mid,arr.length), t));
		}
	}
};

// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(bSearch(a, 10));

coins = [25, 10, 5, 1]
coins = [1]
var makeChange = function (arr, amt) {
	if(arr.length === 1) {
		var res = [];
		for(var i = 0; i < amt; i++) {
			res = res.concat([1]);
		}
		return res;
	}
	else {
		var res = [];
		var largeCoin = Math.floor(amt/arr[0]);
		var remainder = amt % arr[0];
		var x = makeChange(arr.slice(1,arr.length), remainder);
		for(var i = 0; i < largeCoin; i++) {
			res = res.concat([arr[0]]);
		}
		return res.concat(x);
	}
};

var weirdChange = function (arr, amt) {
	if(arr.length === 1) {
		var res = [];
		for(var i = 0; i < amt; i++) {
			res = res.concat([1]);
		}
		return res;
	}
	var lowest = amt
	var answer = []
	for (i = 0; i < arr.length; i++) {
		var x = arr.slice(i,arr.length);
		var res = makeChange(x, amt);
		if(res.length < lowest) {
			lowest = res.length;
			answer = res;
			var largeDenom = answer[0];
		}
	}

	var keeper = answer.slice(0,answer.lastIndexOf(largeDenom)+1);
	var extraCoins = arr.slice(arr.indexOf(largeDenom)+1, arr.length);
	var remainder = amt % largeDenom;
	return keeper.concat(weirdChange(extraCoins, remainder));
};


// console.log(weirdChange([100,70,10,7,1], 154));