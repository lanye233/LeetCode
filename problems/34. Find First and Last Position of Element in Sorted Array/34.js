/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var temp = []
    var ans=[]
    for(var i=0;i<nums.length;i++){
       if(nums[i]==target){
            temp.push(i)
       } 
    }
    if(temp.length != 0){
        ans[0]=Math.min.apply(null,temp)
        ans[1]=Math.max.apply(null,temp)
    }else if(temp.length == 0){
        ans[0]= "-1"
        ans[1]= "-1"
    }

    return ans
};
