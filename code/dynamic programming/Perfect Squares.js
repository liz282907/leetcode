/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number} n
 * @return {number}
 * time limit exceeds
 */
var numSquares = function(n) {
    if (n <= 0) return 0;
    var minCount = Number.POSITIVE_INFINITY,
        squares = countSquares(n);
    backtrack(squares, n, 0, squares.length - 1)
    return minCount;

    function backtrack(squares, leftSum, curCount, end) {
        if (minCount === 1) return;
        if (leftSum === 0 && curCount < minCount) {
            minCount = curCount;
            return;
        }
        if (leftSum < 0) return;

        for (var i = end; i >= 0; i--) {
            var j = i;
            while (squares[j] > leftSum) j--;
            backtrack(squares, leftSum - squares[j], curCount + 1, j);
        }

    }

    function countSquares(n) {
        var last = Math.floor(Math.sqrt(n)),
            result = [];
        for (var i = 1; i <= last; i++) {
            result.push(Math.pow(i, 2));
        }
        return result;
    }

};

//ac,这种方法中arr数组中的值是独立计算的，每次看arr[i]值，是从它的countSqures数组里的值的基础上去进行+1，然后综合算min
var numSquares = function(n) {
    var arr = [0];

    for (var i = 1; i <= n; i++) {
        var minCount = Number.POSITIVE_INFINITY;
        var squares = countSquares(i);
        for (var j = 0; j < squares.length; j++) {
            minCount = Math.min(minCount, arr[i - squares[j]] + 1);
        }
        arr[i] = minCount;
    }
    return arr[n];


    function countSquares(n) {
        var last = Math.floor(Math.sqrt(n)),
            result = [];
        for (var i = 1; i <= last; i++) {
            result.push(Math.pow(i, 2));
        }
        return result;
    }
};

//下面这种方法，本质上跟上面一样，但是利用了闭包，存放一个arr数组，同时更新，使得不用每次都从i=1开始计算，这样整体的时间复杂度降低了。
//测试通过是146ms,上面的是440ms.
var numSquares = (function() {
        var arr = [0,1];

        function countSquares(n) {
            var last = Math.floor(Math.sqrt(n)),
                result = [];
            for (var i = 1; i <= last; i++) {
                result.push(Math.pow(i, 2));
            }
            return result;
        }

        return function(n) {
            if (n < arr.length) return arr[n];
            for (var j = arr.length; j <= n; j++) {
                var minCount = Number.POSITIVE_INFINITY;
                var squares = countSquares(j);
                for (var k = 0; k < squares.length; k++) {
                    minCount = Math.min(minCount, arr[j - squares[k]] + 1);
                }
                arr[j] = minCount;
            }
            return arr[n];
        }

    })();

