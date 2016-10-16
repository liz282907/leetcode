/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 思路，不能排序，因为需要返回index,需要用hash存储index,同时需要考虑target为6，cur=3这种，pairTarget也是
 也是3的情况。这里面还包括两种，一种是arr里面其实有两个3，一种是只包括本身。
 */
var twoSum = function(nums, target) {
    var dic = {};

    for(var i=0;i<nums.length;i++){
        var cur = nums[i];
        if(dic[target-cur]!==undefined){//需要附加判断防止上面的情况发生
            return [i,dic[target-cur]];
        }
        dic[cur] = i;
    }

/*
    //two-pass hash method
    var dic = {};

    nums.forEach(function(num,index){
        dic[num] = index;
    });

    for(var i=0;i<nums.length;i++){
        var cur = nums[i];
        if(dic[target-cur]!==undefined && dic[target-cur]!==i){//需要附加判断防止上面的情况发生
            return [i,dic[target-cur]];
        }
    }

*/

};