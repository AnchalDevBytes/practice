Throttle is a higher order function that ensure a function to be executed at most once in a given time interval. 

```bash

export default function throttle(func, wait) {
    let canRun = true;

    return function (..args) {
        if(!canRun) return;

        canRun = false;

        func(args);

        setTimeout(() => {
            canRun = true;
        }, wait);
    }
}


export default function throttleTimeBased(func, delay) {
    let lastExecuted = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecuted >= delay) {
            lastExecuted = now;
            func(...args);
        }
    };
}

```
