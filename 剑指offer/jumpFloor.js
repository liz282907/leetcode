/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
function jumpFloor(number)
{
	if(number<=0) return 0;
	if(number<=2) return number;
    var result = [1,2];
    for(var i=3;i<=number;i++){
    	result[i-1] = result[i-2]+result[i-3];
    }
    return result[number-1];
}
module.exports = {
    jumpFloor : jumpFloor
};