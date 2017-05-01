/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 * result[i] = result[i-1]*result[1] + result[i-2]*result[2]+ result[i-3]*result[3]+...
 * |     |cur
 * 1： 1
 * 2： 2
 * 3： 2+2 = 4 
 * 因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
 * 跳1级，剩下n-1级，则剩下跳法是f(n-1)
跳2级，剩下n-2级，则剩下跳法是f(n-2)
所以f(n)=f(n-1)+f(n-2)+...+f(1)
		 = 2*f(n-1)
或者思路是：
每个台阶都有跳与不跳两种情况（除了最后一个台阶），最后一个台阶必须跳。所以共用2^(n-1)中情况
 */
function jumpFloorII(number)
{
    if(number<=0) return 0;
	if(number<=2) return number;
    var result = [1,1,2];
    for(var i=3;i<=number;i++){
    	result[i] = 2* result[i-1];
    }
    return result[number]

}
module.exports = {
    jumpFloorII : jumpFloorII
};