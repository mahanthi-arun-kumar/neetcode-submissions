class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max=0,left=0;
        for(let right=0;right<prices.length;right++){
            
            if(prices[left]<prices[right]){
                console.log(prices[right],prices[left])
                max=Math.max(max,prices[right]-prices[left])
            }
            else{
                left=right;
            }
        }
        return max;
    }
}
