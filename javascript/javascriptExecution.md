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