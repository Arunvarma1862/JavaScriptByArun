
// Problem 1

// function loadscript(src){
//     return new Promise((resolve, reject)=>{
//         let script=document.createElement('script');
//         script.src=src;
//         script.onload=function(){
//             resolve(src + " loaded script")
//         }
//         script.onerror=function(){
//             reject(new Error('Error'))
//         }
//         document.body.append(script)
//     })
// }

// let p1= loadscript("https://cdn.jssdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
//     console.log(value);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

//problem 2

// async function loadscript(src){
//     return new Promise((resolve, reject)=>{
//         let script=document.createElement('script');
//         script.src=src;
//         script.onload=function(){
//             resolve(src + " loaded script")
//         }
//         script.onerror=function(){
//             reject(new Error('Error'))
//         }
//         document.body.append(script)
//     })
// }

// const hello=async ()=>{
//         console.time('run')
//         console.log(new Date().getMilliseconds());
        
//         let a= await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
//         console.log(a);
//         console.timeEnd('run')
//         console.log(new Date().getMilliseconds());
        
// }
// hello()


// problem 3

// const hello=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("Hello")
//         }, 3000);
//     })
// }

// const main= async ()=>{
//     try{
//         let a= await hello()
//         console.log(a);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }
// main()

// problem 4

const p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
const p2=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20)
            // reject(20)
        }, 1000);
    })
}

const p3=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

const main=async ()=>{
    console.time('run');
    // let a= await p1();
    // let b= await p2();
    // let c= await p3();


      let a=  p1();
    let b= p2();
    let c=  p3();
    let abc= await Promise.race([a,b,c])
    console.log(abc);

    console.timeEnd('run');

}
main();

