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

```
