

console.log('This is promises');

let prom1= new Promise((resolve,reject)=>{
    let ram =Math.random();
    if(ram<0.5){
        reject("no random")
    }
    else{
        setTimeout(() => {
            console.log("this is done job")
            resolve("done")
       }, 3000);
    }
   
})
let prom2= new Promise((resolve,reject)=>{
    let ram =Math.random();
    if(ram<0.5){
        reject("no random2")
    }
    else{
        setTimeout(() => {
            console.log("this is done job2")
            resolve("done2")
       }, 1000);
    }
   
})

   let p3= Promise.any([prom1,prom2])
   p3.then((a)=>{
    console.log(a)
   }).catch((err)=>{
    console.log(err);
    
   })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
