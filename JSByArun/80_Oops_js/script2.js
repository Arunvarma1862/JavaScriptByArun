// let obj={
//     a:1,
//     b:2
// }

// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:false
// }
// rabbit.__proto__=animal

class Animal{
    constructor(name){
        this.name=name
        console.log('Object is created');
        
    }
    eats(){
        console.log("kha rah hoo")
    }
    jumps(){
        console.log("kood rah hoon")
    }
}

let a = new Animal("john");

console.log(a)

class lion extends Animal{
    constructor(name){    // overriding constructor
        super(name)
        console.log("object is created and he is lion")
    }
 
    eats(){
        super.eats()  // super keyword
        console.log("kha rah hoo jskkks")   // method overrriding
    }
    
}

let b= new lion("sher")
console.log(b)