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
