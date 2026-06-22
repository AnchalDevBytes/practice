# Q5. var vs let vs const

| Feature | var | let | const |
|----------|----------|----------|----------|
| Scope | Function Scoped | Block Scoped | Block Scoped |
| Hoisted | Yes | Yes | Yes |
| Initialized During Hoisting | `undefined` | No | No |
| Temporal Dead Zone (TDZ) | No | Yes | Yes |
| Re-declaration | Allowed | Not Allowed | Not Allowed |
| Re-assignment | Allowed | Allowed | Not Allowed |
| Attached to `window` (Global Scope) | Yes | No | No |
| Creates New Binding in Loop | No | Yes | Yes |
| Use Before Declaration | `undefined` | ReferenceError | ReferenceError |
| Preferred Usage | Avoid | When value changes | Default choice |



# Q6. What is Hoisting ?

Hoisting is a javascript behaviour of making decalaration available before it actually declared into the code.

As we know when we execute code in javascript, first it create Global Execution Context and it has two phase Creation Phase (Memory Allocation Phase) and Exection Phase (Code Phase). 

1. Declaration Phase :- Scan the code and allocates Memory.
2. Execution Phase :- Start Executing code line by line.


## How Hoisting works with var and let and const.

### Hoisting with var
```bash 
    console.log(a);
    var a = 10;

    output : undefined 

    # Reason: variable declared with var are hoisted and initialized with undefined during creation phase.
```

### Hoisting with let and const
```bash 
    console.log(a);
    let a = 10;

    output : ReferenceError: a is not defined

    # Reason: variable declared with let and const are hoisted but remain uninitialized (in temporal dead zone) until execution reaches its declaration.
```

### Temporal Dead Zone :- 
 The period between entering the scope and initialization of a declaration is called temporal dead zone.

 - Entering the scope means it has declared variable example 'a' but it is uninitialized and util it get initialized the state is known as in temporal dead zone.

- This is introduced by let and const to force developer to declare variable before using it.

### Hoisting with function

```bash 
    test();

    function test() {
        console.log("Hello");
    }

    Output :- Hello
    Reason :- There is no error because function is fully hoisted.
```

Tricky :- function expressions or Arrow function.

```bash 
    sayHello();

    var sayHello = function() {
        console.log("Hello");
    };
```
Output :- TypeError.
Reason :- sayHello -> undefined in creation phase and when we call undefined() it throw error.


```bash
    sayHello();

    const sayHello = () => {
        console.log("Hello");
    };
```
Output :- ReferenceError.

Reason :- sayHello -> uninitaialized in creation phase and when we try to call it, it throw error.
