   // Asunc Function

// async function time(){
//     console.log('Async Function');
//     return Promise.resolve("part5")

// }
// time().then(function(result){
//     console.log(result);
    
// })


// Async and Await
// Async return the promise
// Awit wait for the promise
console.log('Part1');

let  promise= new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('part2')
      }, 4000);
})
async function AyncFunc(){
    try{
        let pro= await promise;
        console.log(pro);
        console.log('Part3');
    }
    catch(err){
        console.log('Error',err);
        
    }
    
}

AyncFunc();
// console.log('part4');

try {
    
} catch (error) {
    
}



