class Animal{

    constructor(name,color){
        this.name=name;
        this.color=color
    }
    run(){
        alert(this.name+" run")
    }
    

}
class monkey extends Animal{
    hide(){
        alert(this.name+' hide with this '+this.color )
    }
    eat(){
        alert(`${this.name} is eating`)
    }
}

let ani= new Animal("hii",'orange')
let a= new monkey('Hello','blue');
a.run()
ani.run()
a.hide();
a.eat()