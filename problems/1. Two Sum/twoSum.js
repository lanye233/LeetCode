/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    for(var i = 0;i<nums.length;i++){
        var temp =map.get(target - nums[i]);
        if(temp >=0 && temp !=i){
            return [temp,i];
        }
        map.set(nums[i],i);
    }
    
};
