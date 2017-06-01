/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if(s.length<=1) return s;
    var maxStr = s[0];
    for(var i=0;i<s.length-1;i++){
        var result1 = expandAround(s,i,i),
            result2 = expandAround(s,i,i+1);
        if(result1.length>maxStr.length) maxStr = result1;
        if(result2.length>maxStr.length) maxStr = result2;
    }
    return maxStr;
    
    function expandAround(s,i,j){

        while(i>=0 && j<=s.length-1 && s[i]===s[j]) {
            i--;
            j++;
        }
        return s.slice(i+1,j);
    }
};