
const prompt= require("prompt-sync")({sigint:true});

let num=prompt("Enter number");
   
   let k=1

for ( let i = 1; i <= num ; i++) {
     
   k=k*i;
}
console.log(k);
let num2=prompt("Enter number");
let num5= Array.from(num2);
// let num2=[1,2,3,4,5,6];
let num6= num5.reduce((a,b)=>{
    return a*b;
})
console.log(num6,typeof num6, typeof num2);


// let mm=num.reduce((a)=>{
//     return a*a;
// })
// console.log(mm,typeof mm, typeof num)