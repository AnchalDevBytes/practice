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
