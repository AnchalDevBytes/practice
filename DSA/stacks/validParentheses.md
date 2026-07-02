```bash 

var isValid = function(s) {
    const matching = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    };

    let stack = [];

    for(let char of s) {
        if(char === '[' || char === '{' || char === '(') {
            stack.push(char);
        } else {
            const lastChar = stack.pop();

            if(lastChar !== matching[char]) {
                return false;
            }
        }        
    }

    return stack.length === 0;

};

```
