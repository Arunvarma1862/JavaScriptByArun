
let a =()=>{

 let promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(566)
    }, 4000);
    
})
    return promise;
}

(async ()=>{
    let p= await a();
    console.log(p);
    let m= await a();
    console.log(m);
    let l= await a();
    console.log(l);
    
})()

// console.log(l);









// let p= a();
// p.then((value)=>{
//     console.log(value);
    
// })

