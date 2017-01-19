/**
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,

Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

Return:
["AAAAACCCCC", "CCCCCAAAAA"].
Subscribe to see which companies asked this question

Show Tags

 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var dic = {},maxCount = 0,result = '';
    for(var i=0;i<s.length;i++){
        dic[s[i]] = dic[s[i]]? dic[s[i]]+1:1;
    }
    var curDic = Object.keys(dic).reduce(function(prev,chr){
        if(!prev[dic[chr]]) prev[dic[chr]] = [chr];
        else prev[dic[chr]].push(chr);
        return prev;  //attention2: 别忘了return
    },{});
    //curDic: {1:['t','r'],2:['e']}
    Object.keys(curDic).sort(function(a,b){return b-a}) //attention1: 降序排列
            .forEach(function(count){
        var strOfCount = curDic[count].map(function(chr){
            var temp = '';
            for(i=0;i<count;i++) temp+=chr;
            return temp;
        }).join('');
        result += strOfCount;
    })
    return result;
};

//es6 version
var findRepeatedDnaSequences = function(s) {
    let dic = {},maxCount = 0,result = '';
    s.split('').forEach(chr=>{
        dic[s[i]] = dic[s[i]]? dic[s[i]]+1:1;
    })
    let newDic = {};
    for(let [chr,count] of Object.entries(dic)){
        if(!newDic[count]) newDic[count] = [];
        newDic[count] = newDic[count].concat(new Array(count).fill(chr));
    }
    for(let i=s.length;i>0;i--){
        if(newDic[count].length>0) result+= newDic[count].join('');
    }
    return result;
};