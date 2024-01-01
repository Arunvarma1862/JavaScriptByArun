const pendingPromise= new Promise((resolve,reject)=>{
 // pending, rejected and resolved are three states

    let c=1
    if(c==1){
        resolve(5)
    }
    else{
        reject("failed")
    }
})
console.log('Pending Promise', pendingPromise);

pendingPromise.then((result)=>{
    console.log(result);
    return result+1;
}).then((reuslt2)=>{
    console.log(reuslt2);
    
})

.catch((err)=>{
    console.log(err);
    
})

// let prom1=new Promise((resolve,reject)=>{
//     let ran= Math.random();
//     if(ran<0.5){
//         reject("success");
//     }
//     else{
//         resolve("Failed");
//     }
// })
// prom1.then((a)=>{
//     console.log(a);
    
// }
// ).catch((err)=>{
//     console.log(err);
    
// })