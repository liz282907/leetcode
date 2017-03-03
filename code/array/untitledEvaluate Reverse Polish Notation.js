/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
Subscribe to see which companies asked this question.
 */

/**
 * @param {string[]} tokens
 * @return {number}
 * 有几个注意点：
 * 1，不能用“+-\*\/”.search，因为可能有负数在内部
 * 2，注意/除号， 3/4 整数取floor,负数取ceil
 */
var evalRPN = function(tokens) {
    var stack = [];

    for(var i=0;i<tokens.length;i++){
        var cur = tokens[i];
        if(cur.search(/\d+/)===-1){    //attention！
            var second = stack.pop(),
                first = stack.pop();
            stack.push(operate(first,second,cur));

        }else{
            stack.push(parseInt(cur))
        }
    }
    return stack[0];
    function operate(first,second,cur){
        switch(cur){
            case '+': return first+second;
            case '-': return first-second;
            case '*': return first*second;
            case '/': {
            	var temp = first/second;
            	if(temp<0) return Math.ceil(temp);
            	else return Math.floor(temp)      //attention!
            }  //Math.floor(6/-132) = -1
        }
    }
};