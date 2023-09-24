
const prompt= require("prompt-sync")({sigint:true});
//Q1
// let num=[1,2,4,5];
//  let a =prompt("enter a number ")
// a= Number.parseInt(a);
// num.push(a);
// console.log(num);

// Q2
// let num =[1,5,4,3];
// let a;
// do{
//     a= prompt("enter a number");
//     a=Number.parseInt(a);
//     num.push(a);
// }while(a!=0)
// console.log(num);

// Q3

// let num=[14,10,52,510];
// let u=num.filter((value)=>{
// return value%10==0;
// })

// console.log(u)

// Q4

//let num=[2,4,5,3,4];

//  num.forEach((value)=>{
//  console.log(value* value);
// })

// let m= num.map((value)=>{
//     return value * value;
// })
// console.log(m)

// Q5

const func=(p,q)=>{
    return p*q;
}
let num=[1,2,3,4,5,6];
// let m=num.reduce((p,q)=>{
//     return p*q;
// })
let l=num.reduce(func);
console.log(l);
