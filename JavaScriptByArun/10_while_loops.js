const prompt= require("prompt-sync")({sigint:true});

/*let i=0;
let a= prompt("enter number ");
a=Number.parseInt(a);

while(i<a){
    console.log(i)
    i++;
}*/

let x= prompt("enter number");
x=Number.parseInt(x);
let i=1;
do{
    console.log(i);
    i++
}
while(i<x)