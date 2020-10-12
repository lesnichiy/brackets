module.exports = function check(str, bracketsConfig) {
  // your solution
    const tempBracketsStack = [];
    const bracketsConfigObj = {};
    const strArr = str.split('');

    for (let i = 0; i < bracketsConfig.length; i++) {
        bracketsConfigObj[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    const openBrackets = Object.keys(bracketsConfigObj);
    const closeBrackets = Object.values(bracketsConfigObj);

    for (let i = 0; i < strArr.length; i++) {
        if ( openBrackets.some(item => item === strArr[i]) && bracketsConfigObj[strArr[i]] !== strArr[i]) {
            tempBracketsStack.push(strArr[i]);
        }
        if ( closeBrackets.some(item => item === strArr[i]) && bracketsConfigObj[tempBracketsStack[tempBracketsStack.length - 1]] === strArr[i] ) {
            tempBracketsStack.pop();
        } else if (closeBrackets.some(item => item === strArr[i])) {
            tempBracketsStack.push(strArr[i]);
        }
    }

    return !tempBracketsStack.length;

};
