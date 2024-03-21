// const tiner= new Object();
// const tiner={};
// console.log(tiner);

// tiner.name="hello";
// tiner.email="hello @gmail.com";
// tiner.pla="bns";

// console.log(tiner)


// const item={
//     name:"hello",
//     email:{
//         email1:"hello1",
//         email2:"hello2"
//     }
// }

// console.log(item.email.email1)

// const obj1={1:"a",2:"b"}
// const obj2={3:"n",4:"b"}

// // const obj3= Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj1)
// console.log(obj3)


// const user = [
//     {
//         id:1,
//         email:"hello"
//     },
//     {
//         id:1,
//         email:"hello"
//     },
//     {
//         id:1,
//         email:"hello"
//     }
// ]

// console.log(user[1].email);
// console.log(tiner);
// console.log(Object.keys(tiner));
// console.log(Object.values(tiner))
// console.log(Object.entries(tiner))
// console.log(tiner.hasOwnProperty('email'))

// let ab= Object.keys(tiner);
// for(let key of ab){
//     console.log(key)
// }







// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



