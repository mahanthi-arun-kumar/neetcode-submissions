class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res=[]
        let map = new Map();
        for (let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
              map.set(nums[i],map.get(nums[i])+1)
            }
            else{
                map.set(nums[i],1)
            }
        }
        const mapEntries = [...map.entries()];
        mapEntries.sort((a, b) => b[1] - a[1]); 
        const resArray=mapEntries.slice(0,k);
        console.log(resArray)
        const sol=resArray.map(([a,b])=>{
          return a
        });
        return sol
}
}