class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr=[], res;
        const stack = [];
        
        for (let token of tokens) {
            switch(token) {
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break; // Prevents falling into subtraction
                    
                case '-': {
                    const b = stack.pop(); // Right operand
                    const a = stack.pop(); // Left operand
                    stack.push(a - b);
                    break;
                }
                    
                case '*':
                    stack.push(stack.pop() * stack.pop());
                    break;
                    
                case '/': {
                    const b = stack.pop(); // Right operand
                    const a = stack.pop(); // Left operand
                    // Math.trunc handles truncating toward zero for both pos/neg numbers
                    stack.push(Math.trunc(a / b));
                    break;
                }
                    
                default:
                    // Tokens are strings by default; convert to an integer before pushing
                    stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
