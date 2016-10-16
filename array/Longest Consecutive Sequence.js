/**
 * @param {number[]} nums
 * @return {number}
 * 思路： 对每一个数组元素，查看它的左右元素是否在数组中，逐渐扩展。并置true,并与maxLength比较。
 * 置true是因为，下一次访问到该元素时会因为这个元素已经被记录在某一长度内，可忽略。
 */
var longestConsecutive = function(nums) {
	var dic = {},maxLength = 1;
	nums.forEach(function(num){
		dic[num] = false;
	});
	for(var num of nums){
		if(dic[num]) continue;

		var length = 1;

		for(var next = num+1; dic[next]!==undefined;next++){
			length++;
			dic[next] = true;
		}

		for(var prev = num-1; dic[prev]!==undefined;prev--){
			length++;
			dic[prev] = true;
		}

		maxLength = Math.max(maxLength,length);

	}
	return maxLength;

};