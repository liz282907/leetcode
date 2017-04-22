/**
 * Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number, and n does not exceed 1690.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */

/**
 * @param {number} n
 * @return {number}
 * 
 */
//method 1: 超时
var nthUglyNumber = function(n) {
    if(n<1) return 0;
    var temp = 0,count = 0;
    while(count<n){
        temp++;
        if(isUgly(n)) count++;
    }
    return temp;
    function isUgly(num){
        var factors = [2,3,5]

    	for(var i=0;i<factors.length;i++){
            var factor = factors[i];
            while(num%factor===0 && num!==0) num /= factor; //边界条件： num不为0
        }
        return num===1;
    }
};

/**
 * @param {number} n
 * @return {number}
 * 思路： 维持3个指针，始终指向一个位置，在当前位置之前的丑数均已经在已找到的数组中，当前位置之后的第一个丑数数
 * min(p1*2,p2*3,p3*5)
 * 2，3，5
 *
 *   result : [1, 2 , 3, , , ,]
 *    p1          |
 *    p2          |
 *    p3       |
 *    时间复杂度： O(n)
 */
var nthUglyNumber = function(n) {
    
    if(n<=0) return 0;
    var p1,p2,p3;
    p1 = p2 = p3 = 0;
    var result = [1];

    for(var i=1;i<n;i++){
    	result[i] = Math.min(result[p1]*2,result[p2]*3,result[p3]*5);
    	if(result[i]===result[p1]*2) p1++;
    	if(result[i]===result[p2]*3) p2++;
    	if(result[i]===result[p3]*5) p3++;
    }
    return result[n-1];
};



















