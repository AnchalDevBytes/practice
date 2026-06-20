// this is a special keyword in javascript that refers to the context in which a function is executed not where it is defined.

const user = {
    name : 'John Doe',

    greet() {
        console.log(this.name);
    }
}

user.greet(); // Output: John Doe because here this refers to user object.

// 2ns case
const greet = user.greet;
greet(); // Output: undefined because here this refers to global object (window in browsers) and there is no name property in global object.

// Arrow function do not have their own this value, they inherit it from enclosing scope.

//  call and apply
// fn.call(thisArg, arg1, arg2, ...argN)

function profile(city) {
    console.log(this.name, city);
}

const person = {
    name: 'Anchal raj'
}

profile.call(person, 'Bangalore'); // Output: Anchal raj Bangalore

// fn.apply(thisArg, [argsArr]);

function Info(city1, city2, city3) {
    console.log(this.name, city1, city2, city3);
}

const human = {
    name: 'Anchal raj'
}

Info.apply(human, ['Bangalore', 'Bengaluru', 'Coimbatore']);

