/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * @param {[type]} base     [description]
 * @param {[type]} exponent [description]
 */
function Power(base, exponent)
{
	if(exponent<0 && base>0) return 1/pow(base,Math.abs(exponent));
	if(exponent<0 && base===0) return 0;
	return pow(base,exponent);

    
    function pow(x,n){
    	var dic = [];
    	dic[0] = 1;
    	dic[1] = x;

    	for(var i=2;i<=n;i++){
    		var half = Math.floor(n/2);
    		dic[n] = dic[half]*dic[half];
    		if(n&1) dic[n]*=x;
    	}
    	return dic[n];
    }
}
module.exports = {
    Power : Power
};