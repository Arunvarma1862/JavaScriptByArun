console.log('This is promises');

let prom1= new Promise((resolve,reject)=>{

    let a= Math.random();
    if((a<0.5)){
        reject("no random support ")
    }
    else{
        setTimeout(() => {
            console.log('yes I am done1');
            resolve('harry') 
        }, 3000);  
    }
  
})
let prom2=new Promise((resolve, reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("no random support 2")
    }
    else{
        setTimeout(() => {
            
            console.log('"yes I am done2');
            resolve("aru")
            
        }, 1000);
    }
})

    let p3= Promise.any([prom1,prom2]);
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})








