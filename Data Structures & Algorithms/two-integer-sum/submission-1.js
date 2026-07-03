class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        nums.forEach((num, index)=>{
            map.set(num, index);
        });
        console.log(map.values())
        let result;
        nums.forEach((num, index)=>{
            if(map.has(target-num) && map.get(target-num) !== index  ){
              result=[index,map.get(target-num)]
            }
    })
    return result;
    }

    
}
