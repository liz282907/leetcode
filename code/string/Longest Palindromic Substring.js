/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
Subscribe to see which companies asked this question
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    var arr = s.split('');
    var result = '';

    var longestStr = s[0];
    //n+n-1个中心点。n-1是针对偶数个char.
    for(var i=0;i<s.length-1;i++){
        var type1 = expandAroundCenter(s,i,i);
        if(type1.length>longestStr.length) longestStr = type1;

        var type2 = expandAroundCenter(s,i,i+1);
        if(type12.length>longestStr.length) longestStr = type2;
    }

    return longestStr;

    function expandAroundCenter(str,left,right){

        var l = left,r = right;
        while(l>=0 && r <= str.length-1 && str[l]===str[r]){
            l--;
            r++;
        }
        return str.slice(l+1,r);

    }

    // for(var i=0;i<s.length;i++){
    //     var getResult = true;
    //     var j = arr.lastIndexOf(arr[i]);
    //     if(j===i) continue;
    //     var tempI = i,tempJ = j;

    //     while(tempI<tempJ){
    //         if(arr[i]!==arr[j]) {getResult = false;break;}
    //         else{
    //             tempI++;
    //             tempJ--;
    //         }
    //     }
    //     if(!getResult) continue;
    //     if(s.slice(i,j+1).length>result) result = s.slice(i,j+1);
    // }
    // return result;
};


var longestPalindrome = function(s) {

    var maxStr = s[0];
    var isPalindrome = init2DArray(s.length);

    for(var i = 0;i<s.length;i++){
        isPalindrome[i][i] = true;
    }

    //子串为偶数个char
    for(i=0;i<s.length-1;i++){
        isPalindrome[i][i+1] = s[i]===s[i+1];
        if(isPalindrome[i][i+1]){
            maxStr = s.slice(i,i+2);
        }
    }

    for(var len = 3;len<=s.length;len++)
        for(i=0;i<s.length-len+1;i++){
            var j = i+len-1;
            isPalindrome[i][j] = isPalindrome[i+1][j-1] && s[i]===s[j];
            if(isPalindrome[i][j]){
                maxStr = s.slice(i,j+1);
                // break;
            }

        }

    return maxStr;
    function init2DArray(length){
        var arr = new Array(length);
        for(var i=0;i<length;i++){
            arr[i] = new Array(length);
        }
        return arr;
    }

};