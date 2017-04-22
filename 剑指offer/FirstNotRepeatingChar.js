/**
 * 在一个字符串(1<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置。
 * 如果字符串为空,返回-1
 */
function FirstNotRepeatingChar(str)
{
    var dic = {},len = str.length
    for(var i=0;i<len;i++){
    	if(!dic[str[i]]) dic[str[i]] = []
    	dic[str[i]].push(i);
    }
    var minIndex = len
    Object.keys(dic).forEach(function(c){
    	if(dic[c].length===1) minIndex = Math.min(minIndex,dic[c][0]);
    })
    return minIndex===len?-1: minIndex;
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};