```bash

export default function flatten(value) {
  let result = [];

  for(let item of value) {
    if(Array.isArray(item)) {
        result.push(...flatten(item));
    } else {
        result.push(item);
    }
  }

  return result;
}

```
