```bash

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue;

  let startIndex = 0;

  if(initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for(let i = startIndex; i < this.length; i++) {
    accumulator = callbackFn(
      accumulator,
      this[i],
      i,
      this
    );
  }

  return accumulator;
};

```
