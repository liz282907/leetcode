/**
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
 * @param {number} n
 * @return {string}
 dp问题，注意generateStr的最后别忘了把第n个元素也放进去。
 */
var countAndSay = function(n) {
    var dp = [];
    dp[0] = '1';

    for(var i=1;i<n;i++) dp[i] = generateStr(dp[i-1]);
    return dp[n-1];

    function generateStr(prev){
        var count = 1,result = '';
        for(var i=1;i<prev.length;i++){
            if(prev[i]===prev[i-1]) count++;
            else{
                result+= (count+prev[i-1]);
                count = 1;
            }
        }
        result += count+prev[i-1];  //don't forget
        return result;
    }
};