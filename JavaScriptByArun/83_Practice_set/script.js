// 1 and 2

// class complex{

//     constructor(real,imaginary){
//         this.real=real;
//         this.imaginary=imaginary
//     }

//     add(num){
//         this.real=this.real+num.real;
//         this.imaginary=this.imaginary+num.imaginary
//     }
// }
// let a= new complex(6,2);
// let b= new complex(2,4)
// console.log(a.real , a.imaginary);
// a.add(b)
// console.log(a.real , a.imaginary);


// 3

// class human{
//     constructor(name){
//         console.log('Constructor called');
//         this.name=name   
//     }
//     eat(){
//         console.log('eating');
        
//     }
//     drink(){
//         console.log('drinking');
        
//     }
// }

// class  student extends human{

//     drink(){
//         console.log(this.name+' drink cool drink');
        
//     }
//     play(){
//         super.eat()
//         console.log('playing');    
//     }
// }

// let hy= new student('Harry');
// let h= new human('Aru');
// hy.drink()
// hy.play()


// // 4
// console.log(h instanceof student);
// console.log(hy instanceof student);
// console.log(h instanceof human);


//5
class complex{
    constructor(real,imaginary){
        this.real= real;
        this.imaginary=imaginary
    }

    add(num){
        this.real=this.real+ num.real;
        this.imaginary=this.imaginary+ num.imaginary
    }

    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set real(newReal){
        this._real=newReal
    }
    set imaginary(newImaginary){
        this._imaginary=newImaginary
    }

}

let a= new complex(5,3);
let b= new complex(6,2);

console.log(a.real, a.imaginary);
a.real=10;
a.imaginary=10
a.add(b)
console.log(a.real, a.imaginary);



