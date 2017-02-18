/**
 * Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]


Note:
Could you optimize your algorithm to use only O(k) extra space?

Subscribe to see which companies asked this question.
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 * 思路，接上一题，只不过只维持prev数组+当前cur变动之前的值
 */
var getRow = function(rowIndex) {
	if(rowIndex===0) return [1];
	if(rowIndex===1) return [1,1];

	var cur = [1,1];
	for(var i=2;i<=rowIndex;i++){
		for(var j=0;j<cur.length;j++){
			if(j===0){
				prevNum = cur[j];
			}else{
				curNum= cur[j];
				cur[j] += prevNum;
				prevNum = curNum;
			}
		}
		cur.push(1);
	}
	return cur;

};