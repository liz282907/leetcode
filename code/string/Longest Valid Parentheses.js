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

//dp版本
/*
And the DP idea is :

If s[i] is '(', set longest[i] to 0,because any string end with '(' cannot be a valid one.

Else if s[i] is ')'

     If s[i-1] is '(', longest[i] = longest[i-2] + 2

     Else if s[i-1] is ')' and s[i-longest[i-1]-1] == '(', longest[i] = longest[i-1] + 2 + longest[i-longest[i-1]-2]

For example, input "()(())", at i = 5, longest array is [0,2,0,0,2,0], longest[5] = longest[4] + 2 + longest[1] = 6.


   int longestValidParentheses(string s) {
            if(s.length() <= 1) return 0;
            int curMax = 0;
            vector<int> longest(s.size(),0);
            for(int i=1; i < s.length(); i++){
                if(s[i] == ')'){
                    if(s[i-1] == '('){
                        longest[i] = (i-2) >= 0 ? (longest[i-2] + 2) : 2;
                        curMax = max(longest[i],curMax);
                    }
                    else{ // if s[i-1] == ')', combine the previous length.
                        if(i-longest[i-1]-1 >= 0 && s[i-longest[i-1]-1] == '('){
                            longest[i] = longest[i-1] + 2 + ((i-longest[i-1]-2 >= 0)?longest[i-longest[i-1]-2]:0);
                            curMax = max(longest[i],curMax);
                        }
                    }
                }
                //else if s[i] == '(', skip it, because longest[i] must be 0
            }
            return curMax;
        }

*/
// var longestValidParentheses = function(s) {
//     var longestArr = [0];
//     for(var i=1;i<s.length;i++){
//         if(s[i]===')'){
//             if(s[i-1]==='(') longestArr[i] = i>=2? longestArr[i-2]+2:2;
//             else
//         }
//     }
// };