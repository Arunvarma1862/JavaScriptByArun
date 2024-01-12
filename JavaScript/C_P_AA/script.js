// function sum(a,b){
//     console.log(a+b);
    
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b)
// }
// calculator(1,2,sum)

// function getData(data,getnextData){
//   setTimeout(() => {
//     console.log('data' ,data);
//     if(getnextData){
//         getnextData()
//     }
    
//   }, 2000);
    
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })

let promise= new Promise((resolve,reject)=>{
    console.log('success');
    resolve(123)
    
})