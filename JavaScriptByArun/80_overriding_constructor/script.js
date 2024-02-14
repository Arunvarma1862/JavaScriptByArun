
class Employee{
    constructor(name){
        console.log(`${name} Constructor called1`);
        this.name=name 
    }
    login(){
        console.log(`Employee login`)
    }

    logout(){
        console.log(`Employee logout`)
    }

    requestleave(leaves){
        console.log(`take ${leaves} leaves`)
    }
}

class Programmer extends Employee{

    // constructor(...args) {
    //     super(...args)
    // }

    constructor(name){
        super(name)
        console.log(`${name} Constructor called15`);
        
    }

    requestcofee(x){
        console.log(`take ${x} coffee`)
    }

    requestleave(leaves){
         super.requestleave(leaves);
         console.log('one extra');
         
        // alert(`take ${leaves+1} leaves`)
    }
}
let l = new Employee("Arun");
let a = new Programmer("harry");
a.login();
a.logout();
a.requestleave(4)