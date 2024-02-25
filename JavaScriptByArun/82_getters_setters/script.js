

class Animal{
   
     constructor(name){
        this._name=name
     }
     fly(){
   
        console.log('I am flying dude '+ this._name);
     }

     get name(){
        return this._name
     }

     set name(newName){
        this._name=newName.toUpperCase()
     }
}
class Rabbit extends Animal{
    eat(){
        console.log('eat');
        
    }
}

let a= new Rabbit("hello");
a.fly()
console.log(a.name);
a.name="hack";
console.log(a.name);
a.fly()

let c=56;

console.log(a instanceof Animal);
console.log(a instanceof Rabbit);
console.log(c instanceof Animal);



