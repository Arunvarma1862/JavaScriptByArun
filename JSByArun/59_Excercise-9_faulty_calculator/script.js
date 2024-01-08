// const prompt= require("prompt-sync")({sigint:true});

let random=Math.random();

let a= prompt("Enter number1 ")
let b= prompt("Enter number2 ")
let c= prompt("Enter operation ")

let obj={
    "+":"-",
    "-":"+",
    "*":"+",
    "/":"-",
    "%":"/"

}
if(random<0.1){
    alert(`The reuslt is ${eval(`${a} ${c} ${b}`)}`)
   // console.log(`The reuslt is ${eval(`${a} ${c} ${b}`)}`);
   console.log(`the result is ${eval(`${a} ${b} ${c}`)}`)


}
else{
   c= obj[c];
   alert(`The reuslt is ${eval(`${a} ${c} ${b}`)}`)
  //  console.log(`The reuslt is ${eval(`${a} ${c} ${b}`)}`);
}


