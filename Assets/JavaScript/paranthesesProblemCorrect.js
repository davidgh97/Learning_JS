function validParenthesesRecursive(string) {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    // Base case: empty string is valid
    if (!string || string.length === 0) {
        return true;
    }
    
    // First character must be an opening bracket
    const firstChar = string[0];
    if (!(firstChar in pairs)) {
        return false;
    }
    
    // Find the CORRECT matching closing bracket
    const targetChar = pairs[firstChar];
    let count = 0;
    let matchingIndex = -1;
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === firstChar) {
            count++;
        } else if (string[i] === targetChar) {
            count--;
            if (count === 0) {
                matchingIndex = i;
                break;
            }
        }
    }
    
    // If no matching bracket found
    if (matchingIndex === -1) {
        return false;
    }
    
    // Extract middle and end parts
    const middle = string.slice(1, matchingIndex);
    const end = string.slice(matchingIndex + 1);
    
    // Both parts must be valid
    return validParenthesesRecursive(middle) && validParenthesesRecursive(end);
}

console.log(validParenthesesRecursive("()[]{}"));           // true
console.log(validParenthesesRecursive("([])[]]{}{]}"));     // false
console.log(validParenthesesRecursive("([{}]){[]}(){[[]]}")); // true
console.log(validParenthesesRecursive("[[]]"));             // true
console.log(validParenthesesRecursive("([)]"));             // false
console.log(validParenthesesRecursive("(()))"));             // 