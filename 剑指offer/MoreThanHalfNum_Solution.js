/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 * @param {[type]} numbers [description]
 */
function MoreThanHalfNum_Solution(numbers)
{
	var len = numbers.length,count = 1,max = numbers[0];
	if(len<=0) return ;
    
    for(var i=1;i<len;i++){
    	if(numbers[i]===max) count++;
    	else count--;
        if(count===0) {
            max = numbers[i];
            count = 1;
        }
    }
    count = 0;
    for(i=0;i<len;i++)
    	if(numbers[i]===max) count++;
    if(count>Math.floor(len/2)) return max;
    return 0;
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};