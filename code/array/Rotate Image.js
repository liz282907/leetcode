/**
 * You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 思路，由于题目中要求的是顺时针90，我们看下，首先按照副对角线（左下-右上）翻转一次，顺时针动了180，然后再回头向上（沿着水平线）翻转90°
 * 或者先沿水平线反转180，然后沿主对角线
 *
 * 副对角线的对应关系是 （i,j） (len-1-j,len-1-i)  
 * 然后i,j分别有限定范围的需要注意下
 */
var rotate = function(matrix) {
    var len = matrix.length;
    for(var i=0;i<len;i++)
    	for(var j=0;j<=len-1-i;j++)        // 注意这边j的界限
    		swap(matrix,i,j, len-1-j,len-1-i);
    //沿水平分界线
    for(i=0;i<Math.floor(len/2);i++)       //注意这边i的范围
    	for(j=0;j<len;j++)
    		swap(matrix,i,j, len-1-i,j);

    function swap(matrix,i,j,p,q){
    	var temp;
    	temp = matrix[p][q];
    	matrix[p][q] = matrix[i][j];
    	matrix[i][j] = temp;
    }

};