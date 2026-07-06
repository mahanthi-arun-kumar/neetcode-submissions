class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max=nums[0];
        let currentWindowValue=0;
        for(let right=0;right<nums.length;right++){
          currentWindowValue += nums[right];
          max= Math.max(currentWindowValue, max);
          if(currentWindowValue<0){
            currentWindowValue=0;
            
          }
        }
        return max;
    }
}
