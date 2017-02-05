/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var stepDict = [];

    stepDict[0] = stepDict[1] = 1;
    stepDict[2] = 2;

    for(var i=3;i<=n;i++)
        stepDict[i] = stepDict[i-1]+stepDict[i-2];

    return stepDict[n];


};