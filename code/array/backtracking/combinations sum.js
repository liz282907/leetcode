/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 思路： 还是backtraking的思路，存储一个剩余sum。
 注意点：
 1，剪枝，当leftsum比剩余可以选取的数据要小时，放弃，用return不是break哈。
 2，i从start开始。即下一轮从本次选取的index开始选择。不是从头开始。
 3, 事先对数组进行排序。
 */
 var solution = [];
var combinationSum = function(candidates, target) {

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
                backtrack(i,result,candidates,leftSum-candidates[i],target);
                solution.pop(candidates[i]); //attention!
            }
            else return;

        }

    }
};