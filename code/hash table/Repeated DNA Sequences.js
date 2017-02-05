/**
 * Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
Subscribe to see which companies asked this question
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var dic = {},maxCount = 0,result = '';
    for(var i=0;i<s.length;i++){
        dic[s[i]] = dic[s[i]]? dic[s[i]]+1:1;
        maxCount = Math.max(maxCount,dic[s[i]]);
    }
    var curDic = Object.keys(dic).reduce(function(prev,chr){
        if(!prev[dic[chr]]) prev[dic[chr]] = [chr];
        else prev[dic[chr]].push(chr);
    },{});
    Object.keys(curDic).forEach(function(prev,count){
        var strOfCount = curDic[count].map(function(chr){
            var temp = '';
            for(i=0;i<count;i++) temp+=chr;
            return temp;
        }).join('');
        result += strOfCount;
    })
    return result;

};