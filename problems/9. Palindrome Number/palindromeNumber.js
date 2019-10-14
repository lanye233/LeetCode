/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y=0
    let s=0
    s=x
    while(s>=1){
        y=y*10+s%10
        s=Math.floor(s/10)
    }
    return y==x
    
};
