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
