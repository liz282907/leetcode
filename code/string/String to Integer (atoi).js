/**
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

spoilers alert... click to show requirements for atoi.
Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
 * @param {string} str
 * @return {number}
 test case: +
 思路是：
  ' '' '++-00013ae45
 1. 剔除首部的空格,提取sign. 然后把除了sign以外的另为 nonSpaceStr
 2. 找到第一个符合数字的(非0开头)。找到index。如果找不到,return. 说明""||"+0"||"-+asfds"
 3. 找到 从sign到num之间的部分：即left,如果left中包括了非0字符，那么return0.
 然后需要注意越界的问题。但其实js里面的越界是2^53.。。
 */
var myAtoi = function(str) {
    var i=0,sign=1;
    while(str[i]===' ') i++;
    var nonSpaceStr = str.slice(i);

    //提取正负号
    if(nonSpaceStr.search(/^[+-]/)!==-1) {
        sign = nonSpaceStr[0]==='-'?-1:1;
        nonSpaceStr = nonSpaceStr.slice(1);
    }

    //提取真正可用的数字
    var sum=0,numMatch = nonSpaceStr.match(/([1-9]\d*)+/);

    if(numMatch){

        var  left = nonSpaceStr.slice(0,nonSpaceStr.indexOf(numMatch[0][0]));
        if(left.search(/[^0]+/g)!==-1) return 0;

        for(i=0;i< numMatch[0].length;i++)
        sum = 10*sum + (numMatch[0][i]-'0');

        sum *= sign;

        if(Math.abs(sum)>Math.pow(2,31)-1) {
            if(sign>0) sum = Math.pow(2,31)-1;
            else sum = Math.pow(2,31)*sign;
        }
    }
    /*改进版，需要提前判断，防止越界
    if(numMatch){

        var  left = nonSpaceStr.slice(0,nonSpaceStr.indexOf(numMatch[0][0]));
        if(left.search(/[^0]+/g)!==-1) return 0;

        //这边其实应该要改进的，在Max/10之前就得判断，如果sum>max/10 ||sum==max/10 && cur>max%10 那么越界
        for(i=0;i< numMatch[0].length;i++){
            if(sum>Math.pow(2,31)/10 || sum===parseInt(Math.pow(2,31)/10)&& numMatch[0][i]>Math.pow(2,31)%10-1)
            {
                sum = sign===-1? Math.pow(2,31)*sign :Math.pow(2,31)-1;
                return sum;
            }
            sum = 10*sum + (numMatch[0][i]-'0');
        }
        sum *= sign;
    }
    */
    return sum;
};