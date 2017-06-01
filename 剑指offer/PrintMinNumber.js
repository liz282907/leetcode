/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * 思路，leetcode 的largestnumber。基本一样。注意边界条件。就是如果都是0的话，只用返回一个就可以了
 */

function PrintMinNumber(numbers)
{
    var nums = numbers.map(function(num){
		return num +''
	})
	nums.sort(compare);
    if(nums[0]==='0') return '0'
	return nums.join('')

	function compare(a,b){
		var left = a+b,right = b+a;
		if(left<right) return -1;
		if(left>right) return 1;
		else return 0;
	}
}
module.exports = {
    PrintMinNumber : PrintMinNumber
};