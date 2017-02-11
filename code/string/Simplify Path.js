/**
 * Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
click to show corner cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {string} path
 * @return {string}
 *
 * corner case :
 * 1， Did you consider the case where path = "/../"? In this case, you should return "/".
 *  	对于这个，只要在stack里面pop的时候判断即可。
 * 2。 Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 * 		In this case, you should ignore redundant slashes and return "/home/foo".
 		对于第二个 corner case, js中正则可以避免这个问题，
 * 		var b = "/home//foo/"
		b.split(/\//)
		->: ["", "home", "", "foo", ""]
 * 
 */
var simplifyPath = function(path) {
	var stack = [];
	var arr = path.split(/\//);
	for(var i=0;i<arr.length;i++){
		if(arr[i]==='.' || arr[i]==='') continue;   //attention1 !要 加‘’这个，忽略掉
		if(arr[i]==='..') {
			if(stack.length) stack.pop();      //attention2!
		}
		else stack.push(arr[i]);
	}
	return '/'+stack.join('/');
};