/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){return a-b;});
    var result = [],minSum =Number.MAX_VALUE, gap = Number.MAX_VALUE;
    for(var i=0;i<nums.length-2;i++){
        if(nums[i]===nums[i-1]) continue;

        for(var j=i+1,k=nums.length-1;j<k;){
            var sum = nums[i]+nums[j]+nums[k];
            var curGap = Math.abs(sum-target);

            if(curGap===0){
                return sum;
            }
            else if(sum>target) {
                k--;
                while(nums[k]===nums[k+1] && j<k) k--;
            }
            else {
                j++;
                while(nums[j]===nums[j-1] && j<k) j++;
            }

            if(gap >= curGap) {
                gap = curGap;
                result = sum;
            }
        }
    }
    return result;
};
