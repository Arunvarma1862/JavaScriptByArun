let p1= new Promise((resolve,reject)=>{
    // alert('hey I am not resolved');
    setTimeout(() => {
        resolve(1)
    }, 5000);
})
p1.then((value)=>{
    console.log('Resolved');
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             resolve(5)
        }, 5000);
    })
    
}).then((value)=>{
    console.log(value);
    
})
p1.then(()=>{
    console.log('hurray');
    
})