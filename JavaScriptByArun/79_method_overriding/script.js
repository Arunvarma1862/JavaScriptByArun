// class Employee{
//     login(){
//         console.log(`Employee login`);
        
//     }
//     logout(){
//         console.log(`employee logout`);
        
//     }
//     requestLeave(leaves){
//         console.log(`take  ${leaves} leaves`);
        
//     }
// }
// class programmer extends Employee {

//     requestCoffee(x){
//         console.log(`request coffe ${x} `);
        
//     }
//     requestLeave(leaves){
//         console.log(`take  ${leaves+1} leaves(one extra)`); 
//     }
// }
// let a = new programmer();
// a.login();
// a.logout();
// a.requestLeave(3)





class Employee{
    login(){
        console.log(`Employee login`);
        
    }
    logout(){
        console.log(`employee logout`);
        
    }
    requestLeave(leaves){
        console.log(`take ${leaves} leaves`);
        
    }
}
class programmer extends Employee {

    requestCoffee(x){
        console.log(`request coffe ${x} `);
        
    }
    requestLeave(leaves){
        super.requestLeave(5)
        console.log('one extra');
        
    }
}
let a = new programmer();
a.login();
a.logout();
a.requestLeave(3)

