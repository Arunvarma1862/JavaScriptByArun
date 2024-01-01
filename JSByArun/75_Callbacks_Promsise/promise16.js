function promise(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            console.log('Hello India');
            resolve()
        }, 2000);
    })
}

async function main(){
    console.log('1');
    let a=  await promise();
   console.log(a);
   console.log("2")
   console.log("3")
   console.log("4")
   console.log("5")
    
}
main()

