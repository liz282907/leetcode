/**
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 * @param {string} s
 * @return {number}
 思路是：一遇到'('就push index,一遇到')'，就看top是不是'(',如果是
 pop.否则push当前index.
 这么一遍历，剩下的就是那些not match的部分。就是那些分隔符。
 然后只要计算分隔符  blah blah | blah |
 分隔的那些正确的parenthesis的个数，计算其中的最大数。
 注意头尾。
 */
var longestValidParentheses = function(s) {
    var stack = [],count = 0;
    for(var i=0;i<s.length;i++){
        if(s[i]==='(') stack.push(i);
        else{
            if(stack.length>0 && s[stack.slice(-1)[0]]==='('){
                stack.pop();
            }else stack.push(i);
        }
    }
    if(stack.length===0) return s.length;
    var maxCount = stack[0];    //第一个分隔符切分的首部
    stack.push(s.length);      //防止最后一个分隔符切分的尾部被遗漏。
    for(i=1;i<stack.length;i++){
        count = stack[i]-stack[i-1]-1;
        maxCount = Math.max(count,maxCount);
    }

    return maxCount;
};

//递归版本
// var longestValidParentheses = function(s) {
//     var longestArr = [0];
//     for(var i=1;i<s.length;i++){
//         if(s[i]===')'){
//             if(s[i-1]==='(') longestArr[i] = i>=2? longestArr[i-2]+2:2;
//             else
//         }
//     }
// };