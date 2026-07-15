class MinStack {
    constructor() {
        this.items=[];
        this.minStack =[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
        if(this.minStack.length===0){
       this.minStack.push(val);
        }
        else{
         let min= Math.min(val,this.minStack[this.minStack.length-1]);
         this.minStack.push(min)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.items.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1]
    }
}
