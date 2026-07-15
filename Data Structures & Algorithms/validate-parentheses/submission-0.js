class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack =[];
        const closingBracketMap ={
            '}':'{',
            ']':'[',
            ')': '('
        }
        for(let char of s){
            console.log(stack,char)
            if(closingBracketMap[char]!== undefined){
               const top = stack.length>0 ? stack.pop(): '#';
               console.log(top,"top")
               if(top !== closingBracketMap[char]){
                return false;
               }
            }
            else{
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}
