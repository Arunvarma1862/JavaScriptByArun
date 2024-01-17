

// async function loadscript(src){

//     return new Promise((resolve,reject)=>{
//         let script= document.createElement('script')
//         script.src=src;
//         script.onload=function(){
//             resolve("loaded script "+ src)
//         }
//         script.onerror=function(){
//             reject(new Error('script not loaded'))
//             // throw new Error('script not lodedddd')
//         }
//         document.body.append(script)
//     })
// }



// problem 1
// let p1= loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
//     console.log(value);
    
// })

// problem 2

// async function main(){
// console.log(new Date().getMilliseconds())
// let p1= await loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js');
// console.log(p1);
// console.log(new Date().getMilliseconds());

// }
// main()


// problem 3


// const hello = ()=>{
//     return  new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject(new Error("please wait"))
//         }, 3000);
//     })
// }
// const hii = async ()=>{
//     let a = await hello();
//     console.log(a);
    
// }
// hii()


// const p=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject(new Error("Hello"))
//         }, 3000);
//     })
// }
// const a= async()=>{

//     try{
//         let c=await p();
//         console.log(c);
//     }
//    catch(err){
//     console.log(err);
    
//    }
    
// }
// a()


// problem 4


//   const p1= async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(10)
//         }, 2000);
//     })
//   }
//   const p2= async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // resolve(20)
//             reject(20)
//         }, 1000);
//     })
//   }
//   const p3= async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(30)
//         }, 3000);
//     })
//   }

//   async function main(){


//    console.time('run');
   
//     // let a=await p1();  // fetch 10 products
//     // let b=await p2();  // fetch another 10 products
//     // let c=await p3();   // fetch another 10 products

//      let a=p1();  
//      let b=p2();  
//      let c=p3(); 
//       let abc= await Promise.all([a,b,c])

//     console.log(abc);
//     console.timeEnd('run');
    
    
//   }

//   main()

//5 
async function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
async function p2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve(20)
            reject(20)
        }, 1000);
    })
}
async function p3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

async function main(){


    console.time('run')
    // let a= await p1();
    // let b= await p2();
    // let c= await p3();

    let a=  p1();
    let b=  p2();
    let c=  p3();
    let abc= await Promise.any([a,b,c])
    console.log(abc);
    console.timeEnd('run');
    
    
}

main()









