let p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(1) 
    }, 11000);
})
let p2= new Promise((resolve,reject)=>{
    setTimeout(() => {
    //    resolve(2) 
    reject(new Error ('error'))
    }, 2000);
})
let p3= new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(3) 
    }, 3000);
})


// p1.then((value)=>{
//     console.log(value);
    
// })
// p2.then((value)=>{
//     console.log(value);
    
// })
// p3.then((value)=>{
//     console.log(value);
    
// })

//1 promise.all

// let promise_all=Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
    
// })

//2 promise.allsettled

// let promise_allsettled=Promise.allSettled([p1,p2,p3])
// promise_allsettled.then((value)=>{
//     console.log(value);
    
// })


//3 Promise.race

let promise_race=Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log(value);
    
})

//4 Promise.any

// let promise_any=Promise.any([p1,p2,p3])
// promise_any.then((value)=>{
//     console.log(value); 
    
// })

//5 Promise.resolve

// let promise_resolve=Promise.resolve(6)
// promise_resolve.then((value)=>{
//     console.log(value);
    
// })

//6 promise.reject

// let promise_reject=Promise.reject('hey')
// promise_reject.catch((value)=>{
//     console.log(value);
    
// })


