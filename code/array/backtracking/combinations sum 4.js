/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 time limit exceed
 */


var combinationSum4 = function(nums, target) {

    var result = 0;
    var solution = 0;
    nums.sort(function(a,b){return a-b;});

    backtrack(target);
    return result;
    function backtrack(leftSum){

        if(leftSum===0){
            result++;
            return;
        }
        for(var i=0;i<nums.length;i++){
            if(leftSum<nums[i]) return;
            // solution+=nums[i];
            backtrack(leftSum-nums[i]);
            // solution-=nums[i];
        }
    }
};