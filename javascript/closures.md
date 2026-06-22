# Q1. Closures
## What is a Closure?

A closure is a feature of JavaScript where an inner function has access to the variables of its outer function even after the outer function has finished executing.

Closures are possible because JavaScript uses lexical scoping. When a function is created, it remembers the scope in which it was defined.

```bash
    function createCounter() {
        let count = 0;

        return function () {
            count++;
            return count;
        };
    }

    const counter = createCounter();

    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3
```

when we excute it. The createCounter function finishes execution and returns the inner function.

Normally, we might expect the local variable count to be removed from memory because the outer function has completed execution.

However, the returned function is still using count.

Since the inner function has a reference to count, JavaScript keeps that alive in memory (lexical environment alive) and does not garbage collect it.

Every time we call: counter(). 
it accesses the same count variable and increments it.

That is why the output becomes: 1, 2, 3

### Why this happens?
Becaue outer function not just returing the function. 
Returned function carries the reference of the lexical scope or environment.

### What is Lexical Scope?

Lexical scope means: The scope of a function is determined by where it is defined in source code not where it is called.

## Closures with var and let in Loops

### Closures with Var in Loop
```bash
    for(let var i=0; i<3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }

    output : 3,3,3
```
var is function scoped. Here single variable i is created for entire loop. All callbacks share the same variable. 

so at the time setTimeout is called, the loop is already finsihed. And the value of i become 3. and it print 3 three times.


### Closures with Let in Loop

```bash
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }

    output : 0,1,2
```

let is block scoped. javascript created new binding for each iteration. so each callback has its own variable.