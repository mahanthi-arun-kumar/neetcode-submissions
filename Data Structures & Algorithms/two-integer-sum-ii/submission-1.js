class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let right = numbers.length-1,left=0;
        while(left<right){
            console.log(numbers[left],numbers[right])
             if(numbers[left]+numbers[right]===target){
                return [left+1,right+1]
             }
             else if(numbers[left]+numbers[right]>target){
                right --;
             }
             else{
                left++;
             }
        }
    }
}
