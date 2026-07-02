```bash

var decodeString = function(s) {
    let stack = [];

    let currentString = '';
    let currentNumber = 0;

    for(let char of s) {
        if(!isNaN(char)) {
            currentNumber = currentNumber * 10 + Number(char);
        } else if(char === '[') {
            stack.push(currentString);
            stack.push(currentNumber);

            currentString = '';
            currentNumber = 0;
        } else if(char === ']') {
            const repeatTimes = stack.pop();
            const prevString = stack.pop();

            currentString = prevString + currentString.repeat(repeatTimes);
        } else {
            currentString += char;
        }
    }

    return currentString;
};

``
