console.log("hiiiiii")
console.info("info");
console.error("err")
console.warn("warn")
console.assert("err"!=false);
console.assert("err "==true);


console.time("forLoop");
for(let i=0; i<5;i++){
    console.log(225);
   
}
console.timeEnd("forLoop");


let i=0;
console.time("whileLoop");
while(i<5){
    console.log(225);
    i++;
}
console.timeEnd("whileLoop");