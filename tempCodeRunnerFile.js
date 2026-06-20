const user = {
    name: "Anchal",

    greet: () => {
        console.log(this.name);
    }
};

const result = user.greet();
result();