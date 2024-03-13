

// Destructuring

// let [x,y,...rest]=[1,2,3,4,5,6];
// console.log(x,y,rest);

// let arr=[3,5,6,8,9]
// let [a,,,...rest]= arr
// console.log(a,rest)

// let {a,b}={a:1,b:2}
// console.log(a,b)

let item={
    name:"hello@gmail.com",
    email:"hk"
}

const {name:n}= item
console.log(n)


// Spread

// const arr=[1,6,3];
// // const obj={...arr}
// // console.log(obj);
// console.log({...arr})


// function sun(a,b,c){
//     return a+b+c
// }

// console.log(sun(...arr))


// let obj2={
//     name:"harry",
//     company:"xyz",
//     designation:"dev"
// }
// console.log({...obj2,name:"Arun"})



// spread

// const arr=[1,3,6];
// let obj={...arr}
// console.log(obj)
// console.log({...arr})


// const ar={
//     name:"harry",
//     des:"dev",
//     sal:52222
// }
// console.log({...ar,name:"virat"})


// destrcuting

// let [x,y,...rest]=[1,2,3,4,5,6];
// console.log(x,y,rest)
// let arr=[3,5,6,4,8];
// let [a,b,,,...rest]=arr;
// console.log(a,rest)


// let {a,b}={a:1,b:2};
// console.log(a,b)


// spread

// let arr=[1,2,3];
// let a={...arr};
// console.log(a)
// console.log({...arr})


// let arrrr={
//     name:"virat",
//     des:"batsman",
//     sal:"522333"
// }
// console.log({...arrrr, name:"jadhs"})

// let num=[1,2];
// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(...num))

let a=[1,2,3];
let b=[4,5,6];

console.log([...a,...b])
