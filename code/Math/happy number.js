/**
 * @param {number} n
 * @return {boolean}
 * 终止条件是，如果sum为1，true,如果sum之前出现过，说明是死循环。false
 */
var isHappy = function(n) {

    var sum = 0,
        set = new Set()
    while (true) {
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
        if (n === 0) {
        	if (sum === 1) return true;
            if (set.has(sum)) return false;
            set.add(sum);
            n = sum;
            sum = 0;
        }
    }
};
