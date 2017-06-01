/**
 * @param {number} n
 * @return {number}
 * 注意边界： 负数
 */
var countDigitOne = function(n) {
    if(n<=0) return 0;
    var num = n +'',len = num.length,numFirstDigit,numFirstOthers,numLowerDigit;
	if(len ===1 && n===0) return 0;
	if(len ===1) return 1;

	//1在高位，
	var firstDigit = parseInt(num[0]),otherDigits = n% (Math.pow(10,num.length-1))
	if(firstDigit>1) numFirstDigit = Math.pow(10,num.length-1);
	else numFirstDigit = otherDigits+1;

	//1234-31234的后四位中有多少种可能
	numFirstOthers = Math.pow(10,len-2) * firstDigit * (len-1) //每一位选中为1，其他有Math.pow(10,len-2)种可能，总共有len-1位，总共要计算firstDigit次

	numLowerDigit = countDigitOne(otherDigits);

	return numFirstDigit + numFirstOthers + numLowerDigit;
};