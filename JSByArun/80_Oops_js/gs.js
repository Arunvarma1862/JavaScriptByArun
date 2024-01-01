class User {
    constructor(key){
        this.name=key;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length <4){
            console.log(value.length)
            console.log("Name is too short");
            return ;
        }
        console.log(value.length)
        this._name=value;
    }
}

let user= new User("john");
console.log(user)
console.log(user.name);

user.name="Har";
console.log(user.name)


// In constructor
class Example {
    constructor(value) {
        this.property = value;
    }
}

const instance = new Example("someValue");
console.log(instance.property); // Outputs: someValue

// In methods
const obj = {
    property: "someValue",
    method: function() {
        console.log(this.property);
    }
};

obj.method(); // Outputs: someValue


//event Handlers
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this); // Outputs: the button element
});

// global scope
console.log(this); // Outputs: the global object (e.g., window in browsers)

// Arrow function
const arrowFunction = () => {
    console.log(this);
};

arrowFunction(); // Outputs: the value of `this` in the enclosing lexical context

