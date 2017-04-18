/**
 * Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
Credits:
Special thanks to @dietpepsi for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.

Show Tags

 */
/**
 * @param {string[]} words
 * @return {number}
 * 思路： 先对word排序，然后两层循环判断
 */
var maxProduct = function(words) {
    
};

//思路2，之前的 totalHamming Distance，我们可以看做是hamming distance系列的延伸，怎么把字符串的相等转化为数字的1，0比较。
//一个方法是把字母映射到数字，最暗搓搓的就是每一个字母ascii码或者减去a以后的数字去弄成4位二进制，
//稍微简便一点的是，比如26个字母，b-a 为1，那么就在从右往左第一位设置为1，表明是b，嗯。变相hash,一个word里面重复多个字符也无所谓啦，因为这边只要看是否有重复就好
//注意点：
//1，JavaScript里面没有'b'-'a'得到diff,只能用charCodeAt去进行diff.
//2, 边界条件，见下面
var maxProduct = function(words) {
	var newWords = [],maxProduct = 1,exists = false,len = words.length;
	var charCodeOfA = 'a'.charCodeAt(0);

    for(var i=0;i<len;i++){
    	var word = words[i],curWord = 0;
    	for(var j=0;j<word.length;j++){
    		curWord |= 1<<(word.charCodeAt(j)-'a');
    	}
    	newWords[i] = curWord;
    }
    for(i=0;i<len;i++){
    	word = words[i],maxPair2Len = 0;
    	for(j=i+1;j<len;j++){
    		var pair2Len = words[j].length;
    		if(maxPair2Len>pair2Len) continue;
    		if( word.length && pair2Len && !(newWords[i] & newWords[j])) { //注意这边的判断，因为 a&b===0有多种情况，一种是两者无重复字符，另一种是a,b本身可能就为空字符
    			exists = true;
    			var tempProduct = word.length * pair2Len;
    			maxProduct = Math.max(maxProduct,tempProduct)
    			maxPair2Len = Math.max(maxPair2Len,pair2Len);
    		}
    	}
    }
    return exists?maxProduct:0;


};