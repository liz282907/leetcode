/**
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j 
 * in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 这题楼主理解有偏差...问的是是否至少存在一对index,使得两者之间gap至多为k，应该从反面来考虑，如果相同的两个值他们之间的gap最小也比k大的话，
 * 那么就肯定不存在，因此我们需要维持一个minGap的变量, 用hash，key为值，value为index数组，每存一个进去，就判断下与上一个存放的之间的index gap.
 * 同时更新minGap
 */


//ac answer, hash method
var containsNearbyDuplicate = function(nums, k) {
    var dic = {},minGap = Number.POSITIVE_INFINITY;
    for(var i=0;i<nums.length;i++){
    	var cur = nums[i],lastIndex=0;
    	if(!dic[cur]) {
    	    dic[cur] = [i];
    	}else{
    	    var gap = i- dic[cur].slice(-1)[0];
    	    minGap = Math.min(minGap,gap);
    	    dic[cur].push(i);
    	}
    }
    
    
    return minGap<=k;
};

//method2 ,非常直白的翻译...
var containsNearbyDuplicate = function(nums, k) {
	var len = nums.length;
    for(var i=0;i<len;i++){
    	for(var j=i+1;j<= Math.min(i+k,len-1);j++){
    		if(nums[i]===nums[j]) return true
    	}
    }
    return false;
};



//理解偏差的解法....
var containsNearbyDuplicate = function(nums, k) {
    var dic = {},duplicateExists = false;
    for(var i=0;i<nums.length;i++){
    	var cur = nums[i],lastIndex=0;
    	if(!dic[cur]) {
    	    dic[cur] = [i];
    	}else{
    	    duplicateExists = true;  //加入duplicateExists是因为，可能整个dic中，每个都是一个数组，那么最后会返回true..要避免这种情况
    	    var gap = i- dic[cur].slice(-1)[0];
    	    if(gap>k) return false;
    	    dic[cur].push(i);
    	}
    }
    return duplicateExists;
};