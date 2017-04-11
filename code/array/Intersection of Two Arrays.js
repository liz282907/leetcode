
/**
 * Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
Subscribe to see which companies asked this question.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 思路： 觉得可以用 merge list的思路,注意push进result数组的去重处理
 * 时间复杂度，看sort
 */
var intersection = function(nums1, nums2) {
	var index = 0,result = [];

    function compare(a,b){return a-b}
    nums1.sort(compare);
    nums2.sort(compare);

    for(var i=0,j=0;i<nums1.length && j<nums2.length;){     //注意这边的i,j的边界，是&&
        var left = nums1[i],right = nums2[j];
        if(left<right) i++;
        else if(left>right) j++;
        else {
            if(index>0 && left!==result[index-1] || index===0) result[index++] = left;
            i++;
            j++;
        }
    }
    return result;
};

//思路二，hash ，注意一个nums2数组重复的处理。nums1中不管有没有重复，都设为1，nums2中，如果dic里面有，还要再去
//判断dic[cur]是否为1，为1的话说明是第一次访问，然后把数值--，
var intersection = function(nums1, nums2) {
	var dic = {},result = [];
	for(var i=0;i<nums1.length;i++){
		var cur = nums1[i];
		if(!dic[cur]) dic[cur] = 1;
	}
	for(i=0;i<nums2.length;i++){
		cur = nums2[i];
		if(dic[cur]!==undefined && dic[cur]===1){
			result.push(cur);
			dic[cur]--;
		}
	}
	return result;
};