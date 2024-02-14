let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('2 second of Hii');
        resolve("promise 1");
    }, 2000);
})
p1.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("2 seconds of Hello");
            resolve('promise 2')
        }, 2000);
    })
    // return p2;
}).then((value)=>{
    console.log(value);
    console.log("Done programm");
    return 2;
    
    
}).then((value)=>{
    console.log(value);
    
})

