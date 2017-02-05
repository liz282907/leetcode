/**
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
 * @param {string} a
 * @param {string} b
 * @return {string}
 当然也可以不翻转，直接从最后开始
 */
var addBinary = function(a, b) {
    var carry = 0,curV = 0,j = 0,i=0,
        result = []，length = Math.max(a.length, b.length);

    var inverseA = a.split('').reverse(),
        inverseB = b.split('').reverse();

    while (i < length && j < length) {
        var left = i >= a.length ? 0 : parseInt(inverseA[i]);
        var right = j >= b.length ? 0 : parseInt(inverseB[j]);
        var sum = left + right + carry;
        result[i] = sum % 2;
        carry = parseInt(sum / 2);
        i++;j++;    //别忘了
    }
    if(carry) result[i+1] = carry; //这边需要if判断，不能直接result[i+1] = carry

    return result.reverse().join(''); //别忘了翻转

};
