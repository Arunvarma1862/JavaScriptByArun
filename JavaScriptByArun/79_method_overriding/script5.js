class Human {
    constructor(weapon) {
     this.weapon = weapon;
     this.health = 100;
    }
    receiveDamage() {
     this.health = this.health - 10;
    }
   }
   class Wizard extends Human {
    receiveDamage() {
     this.health = this.health - 5;
    }
   }
   const wizard = new Wizard("staff");
   console.log(wizard.health);
   wizard.receiveDamage();
   console.log(wizard.health);


// class Employee{
//     constructor(){
//         console.log('Constructor called');
        
//     }
//     login(){
//         alert(`Employee login`)
//     }

//     logout(){
//         alert(`Employee logout`)
//     }

//     requestleave(leaves){
//         alert(`take ${leaves} leaves`)
//     }
// }

class Programmer extends Employee{

    constructor(args) {
        super(args)
    }
    
    requestcofee(x){
        alert(`take ${x} coffee`)
    }

    requestleave(leaves){
         super.requestleave(5);
         console.log('one extra');
         
        // alert(`take ${leaves+1} leaves`)
    }
}

let a = new Programmer();
a.login();
a.logout();
a.requestleave(4)