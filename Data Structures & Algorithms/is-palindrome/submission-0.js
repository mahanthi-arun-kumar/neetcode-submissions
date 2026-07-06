class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0;
        let right = cleaned.length-1;
        console.log(right)
        while(left<right){
            console.log(cleaned.charAt(left), cleaned.charAt(right))
            if(cleaned.charAt(left).toLowerCase()!==cleaned.charAt(right).toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
