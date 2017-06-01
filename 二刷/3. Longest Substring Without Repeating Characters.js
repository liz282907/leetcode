/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var map = new Map(),start = 0,maxLen = 0; //始终标志着最长的串的开始位置
    for(var i=0;i<s.length;i++){
    	if(map.has(s[i])){
    		var lastIndex = map.get(s[i]);
    		start = Math.max(start,lastIndex+1); //注意这边是lastIndex+1
    	}
    	map.set(s[i],i);
    	maxLen = Math.max(maxLen,i-start+1);//有可能当前更新的长度并不是最长的

    }
    return maxLen;

};

var lengthOfLongestSubstring = function(s) {
	var longArr = [],maxLen = 0;
	for(var i=0;i<s.length;i++){
		for(var j=0;j<longArr.length;j++){
			if(s[i]===longArr[j]) longArr = longArr.slice(j+1);
		}
		longArr.push(s[i]);
		maxLen = Math.max(maxLen,longArr.length);
	}
	return maxLen;

};