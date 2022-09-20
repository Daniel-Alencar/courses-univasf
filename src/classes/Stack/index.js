class Stack {
  
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
  
    top() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    pop() {
        if (this.items.length !== 0) {
            return this.items.pop();
        }
    }
}

export default Stack; 