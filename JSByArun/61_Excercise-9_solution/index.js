const prompt= require("prompt-sync")({sigint:true});


let a=prompt("Enter Number 1 ");
let b=prompt("Enter number 2 ");
let c=prompt("Operation ");

let random=Math.random();
let obj={
    "+":"-",
    "-":"+",
    "*":"+",
    "/":"-",
    "%":"/"
}
if(random>0.1){
    // perform right operation
    // alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // perform wrong operation
    c=obj[c];
    // alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)

}
