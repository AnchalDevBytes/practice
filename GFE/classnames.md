```bash

export default function classNames(...args) {
  let result = [];

  function helper (value) {
    // Igore falsy values;
    if(!value) return;

    if(typeof value === "string" || typeof value === "number") {
      result.push(String(value));
    }

    if(Array.isArray(value)) {
      for(const item of value) {
        helper(item);
      } 
      return;
    }

    if(typeof value === "object") {
      for(const key in value) {
        if(value[key]) {
          result.push(key);
        }
      }
    }

  }
  
  for(let arg of args) {
    helper(arg);
  }

  return result.join(' ');

}

```
