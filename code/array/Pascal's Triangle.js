/**
 * Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
Subscribe to see which companies asked this question.
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 * 动归...
 */
var generate = function(numRows) {
	if(numRows===0) return [];
	var result = [];
	result[0] = [1];
	result[1] = [1,1];
	
	if(numRows<2) return result.slice(0,numRows);

	var prev = [].concat(result[1]);
	for(var i=2;i<numRows;i++){
		var cur = [1];
		for(var j=1;j<prev.length;j++){
			var sum = prev[j-1]+prev[j];
			cur.push(sum);
		}
	    cur.push(1)
		result.push(cur);
		prev = cur;
	}

	return result;
};