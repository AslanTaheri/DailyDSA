type Fn = (a: number, b: number) => number;

function evalRPN(tokens: string[]): number {

    const operand = new Map<string, Fn>();
    operand
        .set('+', (a, b) => a + b)
        .set('-', (a, b) => a - b)
        .set('*', (a, b) => a * b)
        .set('/', (a, b) => Math.trunc((a / b)));

    const numbers: number[] = [];

    for (const value of tokens) {
        if (operand.has(value)) {
            const b = numbers.pop();
            const a = numbers.pop();
            const operation: Fn = operand.get(value);
            const result = operation(+a, +b);
            numbers.push(result)
        } else { numbers.push(+value) }
    }
    return numbers[0]
};