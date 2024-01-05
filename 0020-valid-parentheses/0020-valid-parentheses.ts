function isValid(s: string): boolean {
    // stack open brackets
    const brackets = new Map<string, string>();

    brackets
        .set(')', '(')
        .set(']', '[')
        .set('}', '{')

    const stack = [];

    for (const string of s) {
        // check closing brackets
        if (brackets.has(string)) {
            const opening = stack.pop();
            if (opening !== brackets.get(string)) return false
        } else {
            stack.push(string)
        }
    }
    //check if all brackets are closed
    if (stack.length !== 0) return false;

    return true;
};