/**
 * Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

Credits:
Special thanks to @minglotus6 for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var dic1 = {},dic2 = {},arr = str.split(/\s+/);
    if(pattern.length!==arr.length) return false; //别忘了这一步，因为str应该是由空格分割的数组，有一个
    //testcase是jquery，jquery，这边str只有一个值，而pattern有6个数。
    for(var i=0;i<pattern.length;i++){
        if(!dic1[pattern[i]]){
            dic1[pattern[i]] = arr[i];
        }else if(dic1[pattern[i]]!==arr[i]) return false;
    }
    //bijection，双向映射，所以要反过来再做一次映射
    for(i=0;i<arr.length;i++){
        if(!dic2[arr[i]]){
            dic2[arr[i]] = pattern[i];
        }else if(dic2[arr[i]]!==pattern[i]) return false;
    }
    return true;
};
