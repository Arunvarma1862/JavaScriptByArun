
// Array MAp method  -- array wont change
let arrr= [42,51,63,57];
 let a= arrr.map((value, index, array)=>{
    console.log(value,index,array)
    // return value+1;
    return value + index;
})
console.log(a);


// Array filter method -- original array wont change

let arr2= [41,52,85,62,0,1,5,2];
let j= arr2.filter((value)=>{
     return value<55;
})
console.log(j, arr2)

// Array reduce method


let arrr3=[1,5,2,4,1,2,3];
let a3=arrr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(a3);

let arrr4= [4,5,8,7,6,];
const reduce_function = (h1,h2)=>{
    return h1+h2;
}
 let a6=arrr4.reduce(reduce_function);
 console.log(a6);