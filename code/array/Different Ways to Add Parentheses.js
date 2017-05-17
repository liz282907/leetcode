/**
 * Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.


Example 1
Input: "2-1-1".

((2-1)-1) = 0
(2-(1-1)) = 2
Output: [0, 2]


Example 2
Input: "2*3-4*5"

(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
Output: [-34, -14, -10, -10, 10]

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {string} input
 * @return {number[]}
 * 思路...递归， 只有当为字符的时候，判断递归后的左边，递归后的右边的结果数组，然后 n*m种情况，push进result数组
 */
var diffWaysToCompute = function(input) {
    
    var result = [];

	for(var i=0;i<input.length;i++){
		var curChar = input[i];
		if(curChar==='+' || curChar==='-' || curChar==='*'){
			var left = diffWaysToCompute(input.slice(0,i));
			var right = diffWaysToCompute(input.slice(i+1));
			for(var j=0;j<left.length;j++){
				var curLeft = left[j];
				for(var k=0;k<right.length;k++){
					var curRight = right[k],curResult;
					switch(curChar){
						case '+': curResult = curLeft+curRight;break;
						case '-': curResult = curLeft-curRight;break;
						case '*': curResult = curLeft * curRight;break;
					}
					result.push(curResult);
				}
			}
		}
	}
	//如果只剩数字，没有字符
	if(!result.length) result.push(parseInt(input))
	return result;
};