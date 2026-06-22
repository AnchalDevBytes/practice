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
