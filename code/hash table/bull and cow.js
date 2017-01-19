/**
 * You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

For example:

Secret number:  "1807"
Friend's guess: "7810"
Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

Please note that both secret number and friend's guess may contain duplicate digits, for example:

Secret number:  "1123"
Friend's guess: "0111"
In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

Credits:
Special thanks to @jeantimex for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
思路： 对secret先遍历一遍，放到dict里面去，同时判断，是否和guess对应位置相同，如果相同的话
就--，bull++,然后在遍历guess的时候跳过这一位。
然后遍历guess,如果secret[i]===guess[i]，跳过，之前计算过。否则，看是否存在于scrtDic中，
如果存在，就是偏移位置的cow。
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var scrtDic = {},bull = 0,cow = 0,chr;
    for(var i=0;i<secret.length;i++){
        chr = secret[i];
        scrtDic[chr] = scrtDic[chr]?scrtDic[chr]+1: 1;
        if(chr===guess[i]) {
            bull++;
            scrtDic[chr]--;
        }
    }
    for(i=0;i<guess.length;i++){
        chr = guess[i];
        if(secret[i]===chr) continue;
        if(scrtDic[chr]){
            cow++;
            scrtDic[chr]--;
        }
    }
    return [bull,'A',cow,'B'].join('');
};