function NumberOf1(n)
{
    var count = 0;
    while(n!==0){
        if(n&1===1) count++;
        n = n>>>1;
    }
    return count;
}

function NumberOf1(n)
{
    var count = 0;
    while(n){
        count++;
        n = n&(n-1);
    }
    return count;
}
module.exports = {
    NumberOf1 : NumberOf1
};