Debounce is higher order function that controls how ofen a function can execute. It will wait for the wait time to get over from the last execution of the function. If the wait time is over, the function will be executed.


```bash

export default function debounce(func, wait) {
  let timer;

  return function(...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }
}

```
