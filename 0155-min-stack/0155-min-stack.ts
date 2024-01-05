class MinStack {
    stack: number[];
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        const topIdx = this.stack.length -1
        return this.stack[topIdx];

    }

    getMin(): number {
        return Math.min(...this.stack)

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */