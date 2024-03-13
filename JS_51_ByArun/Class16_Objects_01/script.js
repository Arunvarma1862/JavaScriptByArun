// singlton
// object.create

// objects literals


// const mysym= Symbol("key1")
// const students={
//     name:"virat",
//    [mysym] :"mykey1",
//     email:"virat@gmail.com",
//     isLoggedIn:false,
//     func:function(){
//         return this.name
//     },
//     isLoggedDays:["mon, wed"]
// }
// // console.log(students.func())
// // console.log(students.isLoggedDays)
// // console.log(students["isLoggedIn"])
// // console.log(students[mysym])

// students.email="hello@gmill.ocom"
// // console.log(students)
// // Object.freeze(students)
// students.name="hello";
// // console.log(students)


// students.greeting=function(){
//     console.log(` hello ${this.name}`)
// }

// // console.log(students.greeting)
// // console.log(students.greeting())

// let a=students.greeting();










// singleton
// Object.create

// object literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



const getTodo={
    name:"virat",
    place:"bengalore"
}

console.log(JSON.stringify(getTodo))
let ac= JSON.stringify(getTodo);
console.log(JSON.parse(ac))
