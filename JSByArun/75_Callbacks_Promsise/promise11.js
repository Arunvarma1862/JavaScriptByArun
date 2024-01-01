// const pendingPromise=new Promise((sucesss,reject)=>{
//     let c=4;
//     if(c==5){
//         sucesss(69)
//     }
//     else{
//         reject(966)
//     }
// })
   


// console.log('Pending_Promise', pendingPromise);

// pendingPromise.then((result)=>{
//     console.log(result);
//     return result+1;
    
// }).then((result2)=>{
//         console.log(result2);
//         return new Promise((reolve,reject)=>{
//             setTimeout(() => {
//                 console.log('Hello India');
                
//             }, 2000);
//         })
// }).then((result3)=>{
//     console.log(result3);
    
// })

// .catch((err)=>{
//     console.log(err)
// })

const pp= new Promise((resolve,reject)=>{
    
    let a=5;
    if(a==5){
        resolve(56)
    }
    else{
        reject(566)
    }
})
console.log(pp)
pp.then((result)=>{
    console.log(result);
    
    return result+1;
}).then((result2)=>{
    console.log(result2);
    
    return new Promise((resolve, reject)=>{
        let x=5;
        if(x==5){
            resolve(result2*5)
        }
        else{
            reject(result2*4)
        }
        // console.log(result2)
    })
    // return result2+1;
    
}).then((result3)=>{
    console.log(result3 + "hllo")
}).catch((err)=>{
    console.log(err)
})


