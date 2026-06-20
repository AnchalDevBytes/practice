JAVASCRIPT CONCEPTS
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


# Q2. Shallow Copy and Deep Copy

## Shallow Copy

```bash
    const original = { name: 'Anchal', address: { city: 'Bangalore' } };

    const shallowCopy = {...original};
    # const shallowCopy = Object.assign({}, original);

    shallowCopy.address.city = 'Coimbatore';

    console.log(original.address.city); // Coimbatore - changed

```

## Deep Copy 

```bash
    const originalObj = { name: 'Anchal', address: { city: 'Bangalore' } };

    # const deepCopy = JSON.parse(JSON.stringify(originalObj));
    const deepCopy = structuredClone(originalObj);
    deepCopy.address.city = 'Delhi';

    console.log(originalObj.address.city); // Bangalore - unchanged
```

TRICKY :- Why not always use JSON.parse(JSON.stringify()) ?
- Losses Function :- undefined, Date, objects become strings, Map/Set, circular refernce throw. 
- Fixes :- To fix this we use structuredClone. But it still not clone function/class methods. for these we need to use external library like lodash.


# Q3. Promises & Async/Await

## What is a Promise?

Promise is an object that represents the eventual completion and failure of an asynchronous operation. 

Promise can be in one of threee states: Pending, Fulfilled and Rejected.

```bash 
    const promise = new Promise((resolve, reject) => {
        const success = true;
        if(success) {
            resolve("Data fetched");
        } else {
            reject("Error fetching data");
        }
    })
```

## Why Promises Introduced?

Before Promises, asynchronous code was handled using callbacks.

```bash
#  Callback way of handling Async code

    getUser(userId, (user) => {
        getOrders(user.id, (orders) => {
            getPayment(orders[0], (payment) => {
                console.log(payment);
            });
        }); 
    }); 
``` 

Problems :- 
- Callback Hell
- Difficult to debug
- Poor readability
- Difficult to Error Handling

```bash
# Promises way of handling Async code

    getUser()
    .then(getOrders)
    .then(getPayment)
    .catch(hanleError);

```
Promises solves callback hell and makes code little more readable.

## Why Async/Await Introduced?

- Promises solves callback hell problem but long chains become difficult to read and maintain.

- Async/Await makes code more readable and easier to debug.

- It look like synchronous code.

```bash 
# Async/Await way of handling Asynchronous code

    async function process() {
        try {
            const user = await getUser();
            const orders = await getOrders(user.id);
            const payment = await getPayment(orders[0]);

            console.log(payment);
        } catch (error) {
            console.error(error);
        }
    }
```


Note : Async/Await is not replacement for promises. It is syntatic sugar on top of promises.


# Q4. How Javascript Executes Code. Call Stack, Event Loop, Callback Queue

Javascript is single threaded and synchronous language. It executes code line by line using call stack with event loop and callback queue or task queue. For asynchronous operations, Browser and Node provide APIs like fetch, setTimeout, setInterval, etc. When the asynchoronous operations completed, callbacks are placed into task queue. Promises and async/await callbacks are placed into micro-task queue and timers are placed into macro-task queue. Micro-task queue has priority over Macro-task queue. Event loop is continuously check whether the call stack is empty and start executing Micro-task queue and after that Macro-task queue. 

## Call Stack
    Call Stack keep the track of currently executing function. It works on LIFO (Last In First Out) principle.

## Event Loop
    Event Loop is a loop that keeps checking whether the call stack is empty or not.

## Callback Queue
    Callback queue is a queue of functions that are waiting to be executed. It works on FIFO (First In First Out) principle.

    - Micro-Task Queue includes Promises, Async/await
    - Macro-Task Queue includes Timers, I/O callbacks


```bash 
# Example of Call Stack, Event Loop, Callback Queue

    console.log("A");

    setTimeout(() => {
        console.log("B");

        Promise.resolve().then(() => {
            console.log("C");
        });

        setTimeout(() => {
            console.log("D");
        }, 0);

    }, 0);

    async function test() {
        console.log("E");

        await Promise.resolve();

        console.log("F");

        await Promise.resolve();

        console.log("G");
    }

    test();

    Promise.resolve().then(() => {
        console.log("H");
    });

    console.log("I");

```

OUTPUT :- A, D, H, J, C, E, I, G, B, F


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


# Q7. What is this? how does it refers to?

this is determined by how a function is called not where it is defined. 

```bash 
    const user = {
        name : 'John Doe',

        greet() {
            console.log(this.name);
        }
    }

    user.greet(); // Output: John Doe because here this refers to user object.
```

### 2nd scenario

```bash 
    const greet = user.greet;
    greet(); // Output: undefined because here this refers to global object (window in browsers) and there is no name property in global object.
```

- Arrow function does not have their own this value, they inherit from enclosing scope.

# Q8. Call, Apply and Bind

### call() invokes a function immediately and allows us to set the value of this inside the function. 

```bash
    # fn.call(thisArg, arg1, arg2, ...argN)

    function profile(city) {
        console.log(this.name, city);
    }

    const person = {
        name: 'Anchal raj'
    }

    profile.call(person, 'Bangalore'); // Output: Anchal raj Bangalore
```

### apply() invovkes the function immediately and allow us to set the value of this inside the function and pass an array arguments.

```bash
#  fn.apply(thisArg, [argsArr]);

    function Info(city1, city2, city3) {
        console.log(this.name, city1, city2, city3);
    }

    const human = {
        name: 'Anchal raj'
    }

    Info.apply(human, ['Bangalore', 'Bengaluru', 'Coimbatore']);
```

### bind() return new function and allows us to set the value of this inside the function.

```bash 
    function greet() {
        console.log(this.name);
    }

    const user = {
        name: 'John Doe';
    }

    const boundGreet = greet.bind(user);
    boundGreet(); // Output: John Doe
```

REACT CONCEPTS

# Q1. Class Components vs Function Components

| Feature | class | function|
|----------|----------|----------|
| syntax | ES6 class | plain function |
| state | this.state, setState | useState hook |
| lifecycle | its own lifecycle method | useEffect hook |
| this | Required | Not used |
| Logic reuse | HOC and render props | custom hooks |
| Modern react | Legacy (still supporte) | Recommended |

# Q2. What is useState Hook in React and Why do we need it?

useState is a React Hook that allow functional component to store and manage state. When state changes React re-renders the component and updates the UI.

## why do we need it if we have normal variables?

- React do not keep track of normal variables thats why when its value changes it does not trigger re-render and therefore UI is not updated. 

```bash
    function Counter() {
        let count = 0;

        const increment = () => {
            count++;
            console.log(count);
        }

        return (
            <div>
                <h3>Count: {count}</h3>
                <button onClick={increment}>Increment</button>
            </div>
        )
    }
```
Output : Click button: count = 1, count = 2, count = 3
But UI does not update.

```bash
    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        )
    }
```

Output : Click button: count = 1, count = 2, count = 3
UI updates.

# Q3. What is useEffect? And How do we use it?

useEffect is a React Hook that allows functional components to perform side effects, such as API calls, subscriptions, Dom manipulation, Event Listener, etc.

```bash
# Example

    useEffect(() => {
    fetch("/api/users");
}, []);
```

## LifeCycle Methods in Function Components

In class components, lifecycle methods are handled using different methods:
    - `componentDidMount()`,
    - `componentDidUpdate()`,
    - `componentWillUnmount()`

In function components, `useEffect` can be used to achieve same behaviour depending on the dependency array.

### 1. componentDidMount()

Runs once after the component mounts.

```js
useEffect(() => {
    console.log("mounted");
}, []);
```

Equivalent to:

```js
componentDidMount()
```

---

### 2. componentDidUpdate()

Runs whenever the specified dependency changes.

```js
useEffect(() => {
    console.log("count updated");
}, [count]);
```

Equivalent to:

```js
componentDidUpdate()
```

for the `count` dependency.

> Note: Unlike `componentDidUpdate`, this effect also runs once after the initial mount.

---

### 3. componentWillUnmount()

Cleanup function runs when the component is removed from the DOM.

```js
useEffect(() => {

    return () => {
        console.log("unmounted");
    };

}, []);
```

Equivalent to:

```js
componentWillUnmount()
```

---

### Important Note

A cleanup function does **not only run on unmount**.

It also runs before the effect executes again when dependencies change.

Example:

```js
useEffect(() => {
    console.log("effect");

    return () => {
        console.log("cleanup");
    };
}, [count]);
```

If `count` changes:

```txt
cleanup
effect
```

will run.

And when the component finally unmounts:

```txt
cleanup
```

runs one last time.

## Difference between useEffect and useLayoutEffect

useLayoutEffect works similiar to useEffect but it runs synchoronously after the DOM updates and before the browser paints the screen, making it useful for DOM measurements and layout related tasks. (like screen flickering)

Execution Order:-

    Render -> DOM Update -> useLayoutEffect -> Paint -> useEffect

##  Parent/Child useEffect Order
Parent has `console.log('parent')`, child1 has `console.log('child1')`, grandchild has `console.log('child2')`. Output: `child2, child1, parent`

Why: React commits children before parents. useEffect fires after commit, bottom-up (deepest first). Child must finish mounting before parent's "post-mount" effect fires.

# Q4. 
