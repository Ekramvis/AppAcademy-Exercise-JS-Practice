

Array.prototype.bubbleSort = function () {
	var unsorted = true;
	while (unsorted) {
		unsorted = false;
		for (i = 0; i < this.length - 1; i++) {
			if (this[i] > this[i+1]) {
				var temp = this[i];
				this[i] = this[i+1];
				this[i+1] = temp;
				unsorted = true;
			}
		}
	}
	return this;
};


// a = [1,7,3,9,3,4,2,7,4,0];
//
// console.log(a.bubbleSort());

var subStrings = function (word) {
	var res = [];
	for (i = 0; i < word.length; i++) {
		for (j = i + 1; j <= word.length; j++) {
			res.push(word.substring(i,j));
		}
	}
	return res;
}

console.log(subStrings("cat"));