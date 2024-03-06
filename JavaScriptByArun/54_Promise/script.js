let promise= new Promise((resolve,reject)=>{
    alert('hello');
    console.log('1');
    resolve(566)
    // reject(6333)
    
})

console.log('2');
setTimeout(() => {
    console.log('3 seconds in Hii');
    
}, 2000);

console.log('4');
console.log(promise);
promise.then((value)=>{
    console.log(value)
})

// Hello World

