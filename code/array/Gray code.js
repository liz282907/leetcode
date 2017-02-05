/**
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

00 - 0
01 - 1
11 - 3
10 - 2
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.

Subscribe to see which companies asked this question
 * @param {number} n
 * @return {number[]}
 000
 001
 011
 010

 110
 111
 101
 100
前半部分与后半部分是对称的，只是加了1<<(n-1)而已。所以知道前半部分（graycode(n-1)，就可以用dp或者递归来求解后半部分）
例如 110就是10的基础上加上2^2(1<<2).
[00 01 11 10] ->从右往左每个加2^2(1<<2)，生成后半部分。
当然加也可以用或运算来描述  1<<2|cur

bit related problem
 */
var grayCode = function(n) {

    return getGray(n);

    function getGray(n){
        if(n===0) return [0];
        if(n===1) return [0,1];

        var GrayBefore = getGray(n-1);
        var result = [].concat(GrayBefore);
        GrayBefore.reverse().forEach(function(v){
            result.push((1<<n-1)+v);    //注意要1<<n-1 与v之间要用（）分隔
        });
        return result;
    }

};

//上面是递归解法，也可以用数组，第n轮的数是由第n-1轮的数+新翻转的对称数组成的。
var grayCode = function(n) {

    var result = [0];
    for(var i=1;i<=n;i++){
        var higherBit = 1<<(i-1);
        for(var j = result.length-1;j>=0;j--){
            result.push(higherBit|result[j]);
        }
    }
    return result;

};
//貌似还可以用数学公式，n位总共可以有2^n个数字，对每个result[i]都可以用
// return n ^ (n >> 1);  n异或n/2.