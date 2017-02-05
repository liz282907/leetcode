/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

Subscribe to see which companies asked this question

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    var phoneDict = {
        "0": [" "],
        "1": [""],
        "2":['a','b','c'],
        "3": ['d','e','f'],
        "4": ['g','h','i'],
        "5": ['j','k','l'],
        "6": ['m','n','o'],
        "7": ['p','q','r','s'],
        "8": ['t','u','v'],
        "9": ['w','x','y','z']
    }

    var solution = [];
    var result = [];
    if(!digits) return [];
    backtrack(0,result,digits,solution,phoneDict);
    return result;

};

function backtrack(digitIndex,result,digits,solution,phoneDict){
        if(digitIndex===digits.split("").length){
            result.push(solution.join(""));
            solution = [];
            return;
        }
        for(var choiceDigit of phoneDict[digits[digitIndex]]){                 //attention!
            solution.push(choiceDigit);
            backtrack(digitIndex+1,result,digits,solution,phoneDict);
            solution.pop();
        }
    }
