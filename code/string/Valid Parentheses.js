/**
 * @param {string} s
 * @return {boolean}
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 思路： 一遇到左边就push进stack,一遇到右边，就pop()现有的，看是不是一对，如果不是，那么false.
 当所有的结束后，看stack中是否还有，如果没有那么就说明valid,否则可能是"[["这种情况

 */
var isValid = function(s) {
    var stack = [],dic = {'[':']','(':')','{':'}'};
    for(var i=0;i<s.length;i++){
        var cur = s[i];
        if(dic[cur]) stack.push(cur);
        else{
            if(dic[stack.pop()]!==cur) return false;
        }
    }
    return !stack.length;
};