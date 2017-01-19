/**
 * Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 超时了....然鹅并没有觉得哪边不对，还是O(n)啊...看了下discuss，方法差不多，不懂为什么wa
 */
var topKFrequent = function(nums, k) {
    var dic = {},revertDic = {},maxCount = 0;
    var result = [];
    for(var i=0;i<nums.length;i++){
        var countInDic = dic[nums[i]];
        dic[nums[i]] = countInDic? countInDic+1:1;
        maxCount = Math.max(maxCount,dic[nums[i]]);
    }
    revertDic = Object.keys(dic).reduce(function(prev,chr){
        var count = dic[chr];
        if(!prev[count]) prev[count] = [];
        prev[count].push(parseInt(chr));
        return prev;
    },{});
    var topK = maxCount;
    for(i=k;i>0;topK--){
        if(revertDic[topK]) {
            result = result.concat(revertDic[topK]);
            i--;
        }
    }
    return result;



};