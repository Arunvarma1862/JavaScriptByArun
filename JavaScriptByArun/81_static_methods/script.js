

class Animal{
    constructor(names){
        this.name=Animal.captialize(names);
    }
  walk(){
    console.log('Animal '+ this.name+ ' is walking');
    
  }

 static captialize(name){
    return name.charAt(0).toUpperCase() + name.substr(1,name.length)
  }
}

let a= new Animal('shera');
console.log(a.name);
a.walk()
