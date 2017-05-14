/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下矩阵： 
 * 1 2 3 4 
 * 5 6 7 8 
 * 9 10 11 12 
 * 13 14 15 16 则依次打印出数字
 * 1,2,3,4,
 * 8,12,16,15,
 * 14,13,9,5,
 * 6,7,11,10.
 * 回溯...思路是，先按当前的方向进行下一个，当发现outofbound或者已经used后，就尝试下一个方向，方向的切换顺序存放在directionSeq数组中
 * 然后对照着当前的方向进行x,y的计算。
 * 时间有点久。。
 * 其实还有更简单的思路，一重大循环（就是circle的次数），对每个circle，依次按右，下，左，上的顺序打印行，列。
 * 
 */

function printMatrix(matrix) {
    var used = init(),
        direction = {
            right: [0, 1],
            down: [1, 0],
            left: [0, -1],
            up: [-1, 0]
        },
        directionSeq = { right: 'down', down: 'left', left: 'up', up: 'right' };
    var result = [],
        count = matrix.length * matrix[0].length;

    backtrack(0, 0, used, count, 'right');
    return result;

    function backtrack(x, y, used, left, curDir) {

        if (left <= 0) return
        result.push(matrix[x][y]);
        used[x][y] = true;

        var tryNextX = x + direction[curDir][0],
            tryNextY = y + direction[curDir][1];
        if (outofBound(tryNextX, tryNextY) || used[tryNextX][tryNextY]) { //换方向
            var nextDirection = directionSeq[curDir];
            var nextX = x + direction[nextDirection][0],
                nextY = y + direction[nextDirection][1];
            backtrack(nextX, nextY, used, left - 1, nextDirection);
        }
        else backtrack(tryNextX, tryNextY, used, left - 1, curDir)
    }

    function outofBound(x, y) {
        return x >= matrix.length || x < 0 || y >= matrix[0].length || y < 0
    }

    function init() {
        var used = [];
        for (var i = 0; i < matrix.length; i++) {
            used[i] = [];
            for (var j = 0; j < matrix[0].length;j++)
                used[i][j] = false;
        }
        return used;
    }
}

/*
链接：https://www.nowcoder.com/questionTerminal/9b4c81a02cd34f76be2659fa0d54342a
来源：牛客网

class Solution {
public:
    vector<int> printMatrix(vector<vector<int> > matrix) {
        int row = matrix.size();
        int col = matrix[0].size();
        vector<int> res;
         
        // 输入的二维数组非法，返回空的数组
        if (row == 0 || col == 0)  return res;
         
        // 定义四个关键变量，表示左上和右下的打印范围
        int left = 0, top = 0, right = col - 1, bottom = row - 1;
        while (left <= right && top <= bottom)
        {
            // left to right
            for (int i = left; i <= right; ++i)  res.push_back(matrix[top][i]);
            // top to bottom
            for (int i = top + 1; i <= bottom; ++i)  res.push_back(matrix[i][right]);
            // right to left
            if (top != bottom)
            for (int i = right - 1; i >= left; --i)  res.push_back(matrix[bottom][i]);
            // bottom to top
            if (left != right)
            for (int i = bottom - 1; i > top; --i)  res.push_back(matrix[i][left]);
            left++,top++,right--,bottom--;
        }
        return res;
    }
};
 */
module.exports = {
    printMatrix: printMatrix
};
