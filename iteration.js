// var al = [1,2,3];
// console.log(al[0]);

// for(var i=0; i < al.length; i++) {
// 	console.log(al[i]);
// }
//
// var x = 0;
// while(x < al.length) {
// 	console.log(al[x]);
// 	x++;
// }
//
// var j = 0
// do {
// 	console.log(al[j]);
// 	j++;
// } while(j < al.length);

// var print_el = function(el) {
// 	console.log(el);
// }


// al.forEach(console.log);
// al.forEach(print_el);

// bigArray = ["a","b","c","d"];
// console.log(bigArray.slice(1,3));
// bigArray.push("e");
// console.log(bigArray);
// bigArray.pop();
// console.log(bigArray);
// bigArray.reverse();
// console.log(bigArray);
// console.log(bigArray.join("blah"));
// var str = "abcde".split("");
// console.log(str);

// var arr = [1,5,3,2,7,4,3,5,3];
// var myUniq = function(a) {
// 	var res = [];
// 	for(var i = 0; i < a.length; i++) {
// 		if(res.indexOf(a[i]) === -1) {
// 			res.push(a[i]);
// 		}
// 	}
// 	return(res);
// };

// console.log(myUniq(arr));

// var barr = [1,-1,0,5,6,-5];
// var twoSum = function(a) {
// 	var res = [];
// 	for(var i = 0; i < a.length; i++) {
// 		for(var j = i + 1; j < a.length; j++) {
// 			if(a[i] + a[j] === 0) {
// 				res.push([i, j]);
// 			}
// 		}
// 	}
// 	return res;
// };
//
// console.log(twoSum(barr));

// var carr = [[1, 2, 3],[1, 2, 3]];
//
// var myTranspose = function(a) {
// 	var width = a[0].length;
// 	var height = a.length;
// 	var res = [[],[],[]];
// 	for(var i = 0; i < height; i++) {
// 		for(var j = 0; j < width; j++) {
// 			res[j][i] = a[i][j];
// 		}
// 	}
// 	return res;
// }
//
// console.log(myTranspose(carr));

