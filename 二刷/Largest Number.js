var parsed = nums.map(function(a){
        return a+'';
    });
    parsed.sort(compare);
    if(parsed[0]==='0') return '0'; //注意[0,0]的情况，应该只返回‘0’
    return parsed.join('')
    
    function compare(a,b){
        var left = a+b,right = b+a;
        if(left<right) return 1;
        else if(left>right) return -1;
        else return 0;
    }