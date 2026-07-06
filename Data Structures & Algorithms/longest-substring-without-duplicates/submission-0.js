class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left =0,max=0;
        const set = new Set();
        for (let right=0;right<s.length;right++){
            while(set.has(s.charAt(right))){
                set.delete(s.charAt(left))
                left ++;
                
            }
             set.add(s.charAt(right))
           max= Math.max(right-left+1,max);
          
                

        }
        return max;
        
    }
}
