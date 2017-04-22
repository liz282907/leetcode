
/*
题目描述
把只包含素因子2、3和5的数称作丑数（Ugly Number）。
例如6、8都是丑数，但14不是，因为它包含因子7。 
习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */
//method1: 超时
function GetUglyNumber_Solution(index)
{
    if(index<1) return 0;
    var n = 0,count = 0;
    while(count<index){
        n++;
        if(isUgly(n)) count++;
    }
    return n;
    function isUgly(num){
        var factors = [2,3,5]

    	for(var i=0;i<factors.length;i++){
            var factor = factors[i];
            while(num%factor===0 && num!==0) num /= factor; //边界条件： num不为0
        }
        return num===1;
    }
}

//注意边界条件： index<=0的时候
//p++是都要判断，而不是if else
function GetUglyNumber_Solution(index)
{
    if(index<1) return 0;
    var p1,p2,p3;
    p1 = p2 = p3 = 0;
    var result = [1];

    for(var i=1;i<index;i++){
        result[i] = Math.min(result[p1]*2,result[p2]*3,result[p3]*5);
        if(result[i]===result[p1]*2) p1++;
        if(result[i]===result[p2]*3) p2++;
        if(result[i]===result[p3]*5) p3++;
    }
    return result[index-1];
}
module.exports = {
    GetUglyNumber_Solution : GetUglyNumber_Solution
};