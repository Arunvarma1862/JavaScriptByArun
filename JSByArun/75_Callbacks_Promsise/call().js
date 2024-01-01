// function A1(val){
//     // console.log(val(),'Customized Function');
//     val()

// }

// function callback(){
//     console.log('I am callback function');
//     // return "called"
// }

// A1(callback)

let obj={
    firstname:"Virat",
    lastname:"kohili",
    fullname: function(){
        return this.firstname  +this.lastname
    }
}


let obj2={
    firstname:"Arun",
    lastname:"kumar"
}
console.log(obj.fullname())
console.log(obj.fullname.call(obj2));


function person(age){
    return "hello"+this.name+"my age is "+ age
}
let person_details={
    name:"Hary"
}

console.log(person.call(person_details,29));

