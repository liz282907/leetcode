/**
 * 单行输入
 * @type {[type]}
 */
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split(' ');

    // 处理
    var result = deal(inputs);

    // 输出结果
    console.log(result);
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';

    // dosomething

    return inputs;
}



//=================================================
//      输入 1 + n 行
//=================================================
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var K = 1; // 输入K行
var inputs = [];
rl.on('line', function(data) {
    // 获取输入
    inputs.push(data.trim());
    if (K == inputs.length) { //
        // 处理
        var result = deal(inputs);

        // 输出结果
        console.log(result);
        // 清0
        inputs.length = 0;

    }
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';

    // dosomething
    return inputs;
}


//=================================================
//      输入 1 + n 行
//=================================================

var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputs = [];
var num = 0;
rl.on('line', function(data) {
    if (num == 0) {
        num = Number(data.trim());
    } else {
        inputs.push(data.trim());
        if (num == inputs.length) {
            // 处理
            var result = deal(inputs);

            // 输出结果
            console.log(result);

            // 清0
            inputs.length = 0;
            num = 0;
        }
    }
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';

    // dosomething

    return inputs;
}









const readline = require('readline')
const process = require('process')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const inputLines = [],
    n, m, x, y, t;
rl.on('line', line => {
    if (!inputLines.length) {
        [n, m, x, y, t] = line.trim().split(/\s*/).map(v => +v);
    } else {
        const arr = line.trim().split(/\s*/).map(v => +v);
        inputLines = inputLines.push(arr);
    }

})
rl.on('close', () => {
    const pc = inputLines[x-1][y-1];
    const resultOfC = calTotal(t,pc);

    //ss
    let sum = 0;
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++){
            sum += inputLines[i][j];
        }
    const ps = sum/(n*m);
    const resultOfS = calTotal(t,ps);


    function calTotal(t,p){
        return 1-Math.pow(1-p,t);
    }
    function output(person, result) {
        console.log(person + '\n');
        console.log(result.toFixed(2));
    }

    if (resultOfC > resultOfS) output('cc', resultOfC)
    else if (resultOfC < resultOfS) output('ss', resultOfS)
    else output('equal', resultOfC)
    
})






const readline = require('readline')
const process = require('process')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const inputLines = [],
    n, m, x, y, t;
rl.on('line', line => {
    if (!inputLines.length) {
        [n, m, x, y, t] = line.trim().split(/\s*/).map(v => +v);
    } else {
        const arr = line.trim().split(/\s*/).map(v => +v);
        inputLines = inputLines.concat(arr);
    }

})
rl.on('close', () => {
    const resultOfC = Math.pow(inputLines[x][y], t);
    const result = 0,
        totalCount = cal(n * m) / (cal(t) * cal(n * m - t));

    backtrack(t, 1, 1);
    const resultOfS = result / totalCount;

    if (resultOfC > resultOfS) output('cc', resultOfC)
    else if (resultOfC < resultOfS) output('ss', resultOfS)
    else output('equal', resultOfC)



    function output(person, result) {
        console.log(person + '\n');
        console.log(result.toFixed(2));
    }

    function backtrack(t, prod, cur) {
        if (cur === (t + 1)) {
            result += prod;
            return;
        }
        if (cur >= t + 1) return;
        for (const i = 0; i < n * m; i++) {
            backtrack(t, prod * inputLines[i], cur + 1);
        }

    }

    function cal(num) {
        if (n <= 2) return n;
        const arr = [1, 2];

        for (const i = 2; i < num; i++) {
            arr[i] = arr[i - 1] * (i + 1);
        }
        return arr[i - 1];

    }

})
