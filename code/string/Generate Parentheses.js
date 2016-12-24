/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 * @param {number} n
 * @return {string[]}
 思路： 在上一题 valid parentheses的基础上进行backtrack。先生成所有的情况，然后最后进行判断，
 是否符合要求，符合就push进去。
 */
var generateParenthesis = function(n) {
    var solution = ['('],options = ['(',')'];
    var result = [];
    backtrack(1,2*n-1,options);
    return result;

    function backtrack(index,total,options){
        if(index===total){
            solution[total] = ')';         //千万不能用solution.push哟，否则会对后面的数据有影响
            var solu = solution.join("");
            if(isValid(solu)) result.push(solu);
            return;
        }
        for(var i=0;i<2;i++){
            solution[index] = options[i];
            backtrack(index+1,total,options);
        }
    }
};

var isValid = function(s) {
    var stack = [],dic = {'(':')'};
    for(var i=0;i<s.length;i++){
        var cur = s[i];
        if(dic[cur]) stack.push(cur);
        else{
            if(dic[stack.pop()]!==cur) return false;
        }
    }
    return !stack.length;
};


//method2
/**
递归解法
一步步构造字符串。当左括号出现次数 <n 时，就可以放置新的左括号。当右括号
出现次数小于左括号出现次数时，就可以放置新的右括号。
很经典的递归解法
*/
var generateParenthesis = function(n){
    var result = [];
    recursion(0,n,0,'');
    return result;

    function recursion(leftCount,n,rightCount,s){
       if(leftCount+rightCount===2*n) {
           result.push(s);
           return;
       }
        if(leftCount<n)
            recursion(leftCount+1,n,rightCount,s+'('); //注意不能写成'('+s

        if(leftCount>rightCount)
           recursion(leftCount,n,rightCount+1,s+')');
    }
}