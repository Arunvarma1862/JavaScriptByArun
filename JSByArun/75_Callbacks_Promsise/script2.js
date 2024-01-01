console.log('system1');
console.log('system2');
setTimeout(() => {
    console.log("hello")
}, 3000);
console.log('system3');
console.log('system4');

const call=(arg2)=>{
    console.log(arg2)
}
const callback=(arg)=>{
    console.log(arg)
    call("hiii");
}

const loadscript= (src,callback)=>{
   let srcc= document.createElement('script');
   srcc.src=src;
   srcc.onload=callback('hellooo');
   document.head.append(srcc);
}
loadscript("https://www.youtube.com",callback)


// const add=(a,b)=>{
//     return a+b;
// }
// const divide=(a,b)=>{
//     return a/b;
// }
// const calculate=(a,b,operation)=>{
//     return operation(a,b);
// }

// console.log(calculate(4,6,add))
// console.log(calculate(4,6,divide))



const addd=(a,b)=>{
    return a+b;
}

const sub=(a,b)=>{
    return a-b;
}

const operations=(ope,a,b)=>{
    return ope(a,b)
}

console.log(operations(addd,5,6))