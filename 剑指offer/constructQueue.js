/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 思路： stack不为空的话，就从它进行pop，为空则从stack1中pop进来，所有都结束后，再从stack2 pop
 */
function push(node)
{
    stack1.push(node);
}
function pop()
{
    if(stack2.length!==0){
        return stack2.pop()
    }else{
        while(stack1.length){
            stack2.push(stack1.pop())
        }
       return stack2.pop()
    }
}

var stack1 = [],stack2 = []

module.exports = {
    push : push,
    pop : pop
};