// // for loop
// let num=[1,52,74,95,32,5];
// for(i=0;i<num.length;i++){
//     console.log(num[i]);
// }
// // for each loops
// num.forEach((element)=>{
//     console.log(element*element);
// })

// // Array from

//  let ane= "Arun";     // html collection/string to array
//  let nb=Array.from(ane);
//  console.log(nb);


 
//  // for in loop
//  for (let key in num){
//     console.log(key +" = "+ num[key]);
//  }

//  // for of loop
//  for(let key of num){
//     console.log(key);
//  }


// for loop
 let num=[1,2,3,4,5];
// for(i=0;i<num.length;i++){
//     console.log(num[i])
// }

// for each
num.forEach((element)=>{
   console.log( element*element)
})

//  Array from

let words="Dhawan";
console.log(Array.from(words));
console.log("Words: "+words)


// for of

for(let key of num){
    console.log(key)
}

// for in
for(let key in num){
    console.log(key  + " " +num[key])
}

let compare=(a,b)=>{
    return a-b
}

let n= [21,1122,845,62];
console.log(n.sort())
console.log(n.sort(compare))
