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
