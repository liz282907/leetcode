/**
 * Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
	var len = nums.length,result = [];
	if(!nums || len===0) return nums;
	

	var temp = [];
    for(var i=0;i<len;i++){
    	temp.push(nums[i]);
    	if(i<len-1 && nums[i+1]!==nums[i]+1 || i===len-1){
    		result.push(output(temp));
    		temp = [];
    	}

    }
    return result;

    function output(arr) {
    	if(!arr) return '';
    	if(arr.length===1) return arr[0]+'';
    	return [arr[0],arr[arr.length-1]].join('->')     //注意这边的边界条件，有可能arr只有一个，那么不做判断的话会导致重复两次
    	//即[-1]   -> [-1->-1]
    }

};