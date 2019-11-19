function isBraces(character) {
    switch (character) {
        case '(':
        case '{':
        case '[':
        case ']':
        case '}':
        case ')':
            return true;
        default:
            return false;
    }
}

function isClosingBraces(character) {
    switch (character) {
        case ']':
        case '}':
        case ')':
            return true;
        default:
            return false;
    }
}

function isMatchingBraces(character1, character2) {
    let result;
    switch (character2) {
        case ']':
            result = character1 === '[';
            break;
        case '}':
            result = character1 === '{';
            break;
        case ')':
            result = character1 === '(';
            break;
        default:
            result = false;
    }
    return result;
}

function balancedBraces(stringContainingBraces) {
    const bracesStack = [];
    for (const character of stringContainingBraces) {
        if (isBraces(character)) {
            if (isClosingBraces(character)) {
                if (isMatchingBraces(bracesStack.pop(), character) === false) {
                    return false;
                }
            } else {
                bracesStack.push(character);
            }
        }
    }
    if (bracesStack.length !== 0) {
        return false;
    }
    return true;
}

export {
    balancedBraces,
};