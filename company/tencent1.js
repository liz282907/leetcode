var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split('');

    // 处理
    var result = longestPalindrome(inputs);

    // 输出结果
    console.log(result+'\n');
});

function longestPalindrome(str){
	if(!str) return 0;
	let maxLen = 1;

	let isPalindrome = new Array(str.length];
	for(var i=0;i<str.length;i++){
		isPalindrome[i] = new Array(str.length);
		for(var j=0;j<str.length;j++){
			isPalindrome[i][j] = 1;
			if(j==i+1 && str[i]===str[j]) {
				isPalindrome[i][j] = 2;
				maxLen = 2;
			}
		}
	}
	for(var len=3; len<=str.length;len++){
		for(i=0;i<=str.length-len;i++){
			var j = i+len-1;
			if(str[i]===str[j]) isPalindrome[i][j] = isPalindrome[i+1][j-1] +2;
			else isPalindrome[i][j] = Math.max(isPalindrome[i][j-1],isPalindrome[i+1][j]);
			maxLen = Math.max(maxLen,isPalindrome[i][j]);
		}
	}
	return str.length-maxLen;
}