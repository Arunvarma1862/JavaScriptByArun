// let obj={
//     a:1,
//     b:2
// }
// console.log(obj);

// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }

// rabbit.__proto__= animal  // sets rabbit.[[prototype]]=animal


class Animal{
    constructor(name){
        this.name=name;
        console.log("object is created");
    }

 eats() {
    console.log("kha rha hoon");
}
jumps(){
    console.log("kood rah hoon");
}
}

class lion extends Animal{
    constructor(name){    // overriding constructor
        super(name)
        console.log("object is created and he is lion")
    }
    eats(){
        super.eats();  // super keyword 
        console.log("kha rah hoo nshhsa")   // method overriding
    }
    
}
let a = new Animal("bunsjj");
console.log(a);

let b= new lion("shera");
console.log(b)