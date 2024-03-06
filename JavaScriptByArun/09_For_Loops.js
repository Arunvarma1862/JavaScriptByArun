// const prompt= require("prompt-sync")({sigint:true});

// for in works for string, array and object
// for of works for  string and array

/*let sum= 0;
let i;
let n= prompt('Enter Number');
n=Number.parseInt(n);
console.log(typeof n)

for(i=0; i<n;i++){
    sum +=(i+1);
    console.log(i+1+"+")
}
console.log("sum of first natural numbers "+ n+ " is "+ sum);
console.log(i);*/

/*let mul=1;
let i;

let num = prompt("Enter number ");
for (i=1; i<num; i++){
    mul *=i;
    // mul = mul * i;
    console.log(mul + " * "+ i )

}
console.log(mul);*/


// const name ={
//     p1 : "Arun",
//     p2 : "Virat",
//     p3 :"jadega",
//     p4: "gill",
//     p5: "rohot"
// }

// for( key in names){      for object
//     console.log(key +  " " +names[key]);
// }

// for ( let key of "Arun"){     for array and string
//     console.log(key);
// }


function add(a,b){
    return a+b
}
console.log(add('2','6'))