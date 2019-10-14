/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var arr=new Array()
    for(var i=0;i<nums.length;i++){
        arr[i]=new Array()
    }
    for(var i=0;i<nums.length;i++){
        arr[i][0]=nums[i]
        arr[i][1]=0
    }
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(arr[i][0]==nums[j]){
                arr[i][1]+=1
             }
        }
    }
    for(var j =0;j<nums.length;j++){
        if(arr[j][1]==1)
            return arr[j][0]
    }
    
    
};
