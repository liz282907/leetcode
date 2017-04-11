/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

Hint:

How many majority elements could it possibly have?
Do you have a better hint? Suggest it!
Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路，最多可能有两个element..因为有空间o(1)的限制，hash就不能做了。用之前那个vote的方法。具体用test case带入下就可以体会了
 * test case 3,3,2,1,2,1,1带入下就清楚了   3,3,2,1,2,5,8 |
 * 													   此时均重新开始，8成为major
 */
var majorityElement = function(nums) {

	var len = nums.length,result = [];
	if(!nums ||len ===0) return result;

    var major = nums[0],second = nums[0],count1 = 0,count2 = 0;
    for(var i=0;i<len;i++){
    	if(nums[i]===major) count1++;
    	else if(nums[i]===second) count2++;
    	else if(count1===0){
    		major = nums[i];
    		count1 = 1;
    	}else if(count2===0){
    		second = nums[i];
    		count2 = 1;
    	}else{
    		count1--;
    		count2--;
    	}
    }
    //动态维持count最大的两个值，有先后顺序的，但是count到现在的值并不是真实的count，是抵消以后的
    count1 = count2 = 0;
    for(i=0;i<len;i++){
    	if(nums[i]===major) count1++;
    	else if(nums[i]===second) count2++;
    }
    var baseline = Math.floor(len/3);
    if(count1>baseline) result.push(major);
    if(count2>baseline) result.push(second);     //注意more than ，是>

    return result;

};