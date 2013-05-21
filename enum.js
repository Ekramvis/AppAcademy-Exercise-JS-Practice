
var arr = [1,2,3,4];

// var myEach = function (a, meth) {
// 	for (var i = 0; i < a.length; i++) {
// 		meth(a[i]);
// 	}
// 	return a;
// };

Array.prototype.myEach = function (meth) {
	for (var i = 0; i < this.length; i++) {
		meth(this[i]);
	}
	return this;
};

// var myMeth = function (el) {
// 	console.log(el * 2);
// };

// myEach(arr, myMeth);

// arr.myEach(myMeth);
//
// Array.prototype.myInject = function (start, meth) {
// 	var accum = start;
// 	for (var i = 0; i < this.length; i++) {
// 		accum = meth(accum, this[i]);
// 	}
// 	return accum;
// }

Array.prototype.myInject = function (accum, meth) {
	this.myEach(function(item) {
		accum = meth(accum, item);
	});
	// for (var i = 0; i < this.length; i++) {
	// 	accum = meth(accum, this[i]);
	// }
	return accum;
}

var myPlus = function(a,b) {
	return(a + b);
};

var myMult = function(a,b) {
	return(a * b);
};

console.log(arr.myInject(0, myPlus));

console.log(arr.myInject(1, myMult));