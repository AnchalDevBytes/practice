```bash

var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);

    const stack = [];

    for(let i=0; i<temperatures.length; i++) {
        while(
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]] 
        ) {
            const lastIdx = stack.pop();
            result[lastIdx] = i - lastIdx;
        }

        stack.push(i);
    }

    return result;
};

```
