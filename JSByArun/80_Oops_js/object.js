class Animal{
    
    constructor(key){
        this.name=key
        console.log('objext is created')
    }
    
    eats(){
        console.log('kah');
        
    }
    jumps(){
        console.log('kood');
        
    }
}
let a = new Animal("sher");
console.log(a)
console.log(a.name)


class employee{
    static method(){
        console.log('static')
    }
}
employee.method()
