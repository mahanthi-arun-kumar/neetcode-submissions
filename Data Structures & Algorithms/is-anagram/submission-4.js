class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1= s.split('');
        const s2= t.split('');
        const map1= new Map();
        const map2= new Map();
        const updatemapsWithCount =(map,s)=>{
         for (let char of s){
            if(map.has(char)){
                map.set(char,(map.get(char) || 0) + 1);
            }
            else{
                map.set(char,1)
            }
        }
       
        }
         updatemapsWithCount(map1,s1)
         updatemapsWithCount(map2,s2)
         if(map1.size !== map2.size)
         return false
        for (let [item, count] of map1){
            
            console.log(item)
            if(map1.get(item)!==map2.get(item)){
             return false
            }
        }
        return true;
        
       
    }
}
