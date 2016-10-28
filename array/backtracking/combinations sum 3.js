/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 思路，同backtracking的其他题目一样，关于solution，可以用push+pop，也可以直接用solution[curSeq]。
 具体来说是，如果是给定要求是几个数字的sum，那么可以用curSeq，否则用push,pop好一点，比较适用于组合的一般情况。
 其次，如果是curSeq，注意提前剪枝。剪枝处见2,3处
 思路二： 也可以用3sum的写法啊~
 */

var combinationSum3 = function(k, n) {
    var solution = [];
    var result = [];
    backtrack(1,0,n,k);
    return result;


    function backtrack(start,curSeq,targetSum,num){

        if(curSeq===num && curSum(curSeq)===targetSum){ //1
            result.push([].concat(solution));
            return;
        }
        if(curSeq>=num) return;           //3,提前结束，防止只满足1中&&前半部分条件，但是后半部分不满足，然后回继续无效查找
        for(var i=start;i<=9;i++){
            var leftSum = targetSum-curSum(curSeq);
            if(leftSum<i) return;                         //2
            solution[curSeq] = i;

            backtrack(i+1,curSeq+1,n,k);
        }
    }
    function curSum(seq){
        return solution.reduce(function(prev,cur,index){
            if(index<seq)
                prev+=cur;
            return prev;
        },0);
    }
};