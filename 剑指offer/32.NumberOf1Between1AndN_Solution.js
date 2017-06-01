/**
 * 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 * 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
 * ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数。
 */

//算法复杂度nlgn 。因为对于n来说，有lgn位。
function NumberOf1Between1AndN_Solution(n)
{
	var result = 0;
    for(var i=1;i<=n;i++){
    	result += countOne(i);
    }
    return result;
    function countOne(n){
    	var count = 0;
    	while(n){
    		count += ((n%10)===1);
    		n = Math.floor(n/10);
    	}
    	return count
    }
}

//之所以要拆分，是希望可以用比如1001- 11001中间有10000个数，这样就可以用排列组合的方法计算里面1的可能性，
//每一位都有10种可能。
function NumberOf1Between1AndN_Solution(n)
{
	var num = n +'',len = num.length,numFirstDigit,numFirstOthers,numLowerDigit;
	if(len ===1 && n===0) return 0;
	if(len ===1) return 1;

	//1在高位，
	var firstDigit = parseInt(num[0]),otherDigits = n% (Math.pow(10,num.length-1))
	if(firstDigit>1) numFirstDigit = Math.pow(10,num.length-1);
	else numFirstDigit = otherDigits+1;

	//1234-31234的后四位中有多少种可能
	numFirstOthers = Math.pow(10,len-2) * firstDigit * (len-1) //每一位选中为1，其他有Math.pow(10,len-2)种可能，总共有len-1位，总共要计算firstDigit次

	numLowerDigit = NumberOf1Between1AndN_Solution(otherDigits);

	return numFirstDigit + numFirstOthers + numLowerDigit;
}

function NumberOf1Between1AndN_Solution(n)
{
	var count = 0;
	//314 1 592 into a=314 and b=592。
	//(right+1)* (cur===1?1:0)是右边的数字，如果本位>=1，那么右边有b+1中情况（0-b）.但是如果cur==0，则
	//没有任何贡献。
	//对于左边来说，如果本位为1，那么是(a/10)*m + b+1 种情况。如果本位=0,那么就是
	//如果本位>=2，那么右边是空的，左边应该是a/10 * m + m 
	//314 2 592 比 314 1 592多了  3150 592
	//意会一下就知道了...总之是为了区分三种情况（0的左少，右也无，1的左少右有，>2的左多右无）
	for(var m=1;m<=n;m*=10){              //等于号不能漏
		var right = n%m,left = Math.floor(n/m),cur = left%10;
		count += (Math.floor((left+8)/10))*m + (right+1)* (cur===1?1:0)
	}
	return countOne;
}



module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};