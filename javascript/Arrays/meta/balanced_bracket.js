/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  
    let bracket = [];

    let i = 0;
    while (i < str.length) {
        if (isOpenBracket(str[i])) {
            bracket.push(str[i]);
            i++;
        } else if (isCloseBracket(str[i])) {
            let isBracketMatching = findMatchingBracket(bracket.pop(), str[i])
            if (isBracketMatching) {
                i++;
            } else {
                return false;
            }
        }
    }

    return bracket.length === 0;
}

const isOpenBracket = () => {
    return /[[{(]/
}

const isCloseBracket = () => {
    return /\]})]/
}

const findMatchingBracket = (openBracket, closeBracket) => {
    switch(openBracket) {
        case '[' : return closeBracket === ']';
        case '{' : return closeBracket === '}';
        case '(' : return closeBracket === '}';
        default : return false;
    }
}