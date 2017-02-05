/*

Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

*/



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 test case:[10, 1, 2, 7, 6, 1, 5],注意重复的元素的处理。
 unique的体现在于两点： 本轮有重复的则跳过；start从i/i+1开始push.
 */
var combinationSum2 = function(candidates, target) {

    solution = [];
    var result = [];
    candidates.sort(function(a,b){return a-b;});
    backtrack(0,result,candidates,target,target);
    return result;


    function backtrack(start,result,candidates,leftSum,target){

        if(leftSum===0){
            result.push([].concat(solution));
            return;
        }
        else if(leftSum<0)
            return;

        for(var i=start;i<candidates.length;i++){
            if(leftSum>=candidates[i]){
                solution.push(candidates[i]);
                backtrack(i+1,result,candidates,leftSum-candidates[i],target);
                solution.pop(candidates[i]); //attention!
                while(candidates[i+1]===candidates[i]) i++; //attention！
            }
            else return;

        }

    }

};