const user={
    username:"hello",
    price:666,
    func:function(){
           console.log(` ${this.username} isLoggedIN`)
        //    console.log(this)
    }
}

user.func()
user.username="hjmm";
user.func()
console.log(this)


function on(){
    console.log(this)
}
// on()

const onn=()=>{
    const username="hello"
    console.log(this.username)
    console.log(this)
}
onn()



// const item=(a,b)=>{
//     return a+b
// }
// const item=(a,b)=> a+b

// const item=(a,b)=>  (a+b)

const item =(a,b)=>({username:"hello"})


console.log(item(1,2))

const array= [1,2,3,4,5];
array.forEach((element)=>{
    console.log(element)
})











const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()