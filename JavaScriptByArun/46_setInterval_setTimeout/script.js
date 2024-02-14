// console.log('1');
// console.log('2');

// const sum =(a,b)=>{
//     console.log('yes I am running '+(a+b));
// }
// setTimeout(sum,1000,1,2);

// const mul=(a,b)=>{
//     // alert('the mul'+ (a*b))
//        console.log('the mul'+ (a*b));
// }
// setInterval(mul,2000,4,6);


   
//    let a= setTimeout(() => {
//         console.log('3');
//         alert("hello")
//     }, 5000);

//     let b= prompt("do you want run settimeout?")
//     if("no"==b){
//         clearTimeout(a)
//     }
// console.log('4');
// console.log('5');

console.log('1');
console.log('2');
async function time(){
    const timeout=2000;
    return await new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('3');
            resolve("hello")  
        }, timeout);
    })
}

time().then((value)=>{
    console.log(value)
    console.log('4');
    console.log('5'); 
})

// (async()=>{
//     console.log('1');
//     console.log('2');
//     const timeout=2000;
//     await new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('3');
//             resolve()
            
//         }, timeout);
//     })

//     console.log('4');
//     console.log('5');
    
// })()


