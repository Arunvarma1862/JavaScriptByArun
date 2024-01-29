

// Destructuring

// let [x,y,rest]=[1,2,3,4,5,6];
// console.log(x ,y, ...rest);

// let arr=[3,5,6,8,9]
// let [a,,,...rest]= arr
// console.log(a,rest)


// let {a,b}={a:1,b:2}
// console.log(a,b)


// Spread

const arr=[1,6,3];
// const obj={...arr}
// console.log(obj);
console.log({...arr})


function sun(a,b,c){
    return a+b+c
}

console.log(sun(...arr))


let obj2={
    name:"harry",
    company:"xyz",
    designation:"dev"
}
console.log({...obj2,name:"Arun"})
