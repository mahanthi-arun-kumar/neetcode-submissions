class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            
            // 1. Sort the string alphabetically to create a foolproof key
            // "tea" -> ["t", "e", "a"] -> ["a", "e", "t"] -> "aet"
            const sortedKey = word.split('').sort().join('');

            // 2. Group them inside the object directly (safeguards duplicates)
            if (!groups[sortedKey]) {
                groups[sortedKey] = [];
            }
            groups[sortedKey].push(word);
        }

        // 3. Return the 2D array directly without double-nesting it
        return Object.values(groups);
    }
}