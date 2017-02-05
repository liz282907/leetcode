/*
problem:
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

0 0 0 5
4 3 1 4
0 1 1 4
1 2 1 3
0 0 1 1
*/

/**
思路： 需要注意的是第一行和第一列应该对其他有影响，否则会全0设置出来。。
先遍历除了第一列的所有数字，有0则对第一行和第一列设置。第一列中如果有0，那么最终第一列也是要全0的的。
然后继续遍历除了第一列的所有数字。从右下角开始设置。最后再设置第一列。
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	var rows = matrix.length,
		cols = matrix[0].length;
	var col0 = 1;

	for(var i=0;i<rows;i++){
		if(matrix[i][0]===0) col0 = 0;
		for(var j=1;j<cols;j++){
			if(matrix[i][j]===0){
				matrix[i][0] = matrix[0][j] = 0;
			}
		}
	}
	for(i=rows-1;i>=0;i--){
		for(j=cols-1;j>=1;j--){
			if(matrix[i][0]===0 || matrix[0][j]===0){
				matrix[i][j] = 0;
			}
		}
		if(col0===0) matrix[i][0] = 0;
	}

	// for(var i=0;i<rows;i++){
	// 	for(var j=0	;j<cols;j++){
	// 		if(matrix[i][j]===0){
	// 			matrix[i][0] = 0;
	// 			matrix[0][j] = 0;
	// 		}
	// 	}

	// }


	// var hasI = {},hasJ = {};

	// for(var i=0;i<rows;i++)
	// 	for(var j=0;j<cols;j++){
	// 		if(matrix[i][j]===0){
	// 			hasI[i] = true;
	// 			hasJ[j] = true;
	// 		}
	// 	}
	// for(i=0;i<rows;i++){
	// 	if(hasI[i]){
	// 		for(j=0;j<cols;j++){
	// 				matrix[i][j] = 0;
	// 		}
	// 	}
	// }
	// for(j=0;i<cols;j++){
	// 	if(hasJ[j]){
	// 		for(i=0;i<rows;i++){
	// 				matrix[i][j] = 0;
	// 		}
	// 	}
	// }
}