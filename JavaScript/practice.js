// const item ={
//     names:"Hello",
//     price:56,
//     indian:true,
//     char:null
//     // nnssbbu
// }
// console.log(item["names"])
// console.log(item.price)

// let a="Hello World"
// console.log(typeof a)
// console.log(a+15)

const prompt= require("prompt-sync")({sigint:true});

// let b= prompt("hello, what your age?");
// console.log(typeof b);
//  b=Number.parseInt(b);
//  console.log(typeof b)
//  if(b>0){
//     alert("this is valid age")
//  }
// let sum=0;
// let n=prompt("Enter the value");
// n=Number.parseInt(n);

// for(let i=0;i<n;i++){
//    sum += (i+1);
// }
// console.log(sum)

// const item={
//    harry:96,
//    arun:86,
//    viru:63
// }
// for(let a in item){
//    console.log(a + item[a])
// }

// for(let b of "viru"){
//    console.log(b)
// }

// let n= prompt("Enter the value");
// n= Number.parseInt(n);
// let i=0;
// while(i<n){
//    console.log(i);
//    i++;
// }

// let n= prompt("Enter the value");
// n= Number.parseInt(n);
// let i=0;
// do{
//    console.log(i);
//    i++;
// }
// while(i<n)

// const heloo=(a,b)=>{
//    console.log("hello world");
//    // return "hiii";
//    return a+b;
  
// }

// console.log(heloo(5,3))

const obj={
   harry:96,
   Arun:96,
   viru:63,
   sehwag:29
}

// for(let i=0;i<Object.keys(obj).length;i++){
//    console.log(Object.keys(obj)[i]+ obj[Object.keys(obj)[i]])
// }

// for(let a in obj){
//    console.log(a + obj[a])
// }

// let cn=5;
// let user;
// while(cn!=user){
//    user=prompt("enter a number");
//    console.log("Try again")
// }
// console.log("Right number")


const mean=(a,b,c,d)=>{
   return a+b+c+d/4;
}

console.log(mean(1,2,5,8))