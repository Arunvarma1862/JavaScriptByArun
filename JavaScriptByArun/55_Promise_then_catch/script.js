// let p1= new Promise((resolve,reject)=>{
//     console.log('Promise is pending');
//     setTimeout(() => {
//         // console.log('promise fulfilled');
//         resolve(true);  
//     }, 5000);
// })
// let p2= new Promise((resolve,reject)=>{
//     console.log('Promise is pending');
//     setTimeout(() => {
//         //  console.log('promise rejected');
//             reject(new Error("promise is rejected"))   
//     }, 5000);
// })
// console.log(p1,p2);

//  p1.then((value)=>{
//     console.log("value1 : "+value);
//  }).catch((error)=>{
//     console.log(error);
    
//  })

//  p2.catch((error)=>{
//     console.log(error);
    
//  })

//  p2.then((value)=>{
//     console.log("value2 : "+value);
    
//  }).catch((error)=>{
//     console.log(error);
    
//  })


function hello (){
    alert('sure')
}

 function loadscript(src,callback){
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script')
        script.src=src;
        script.onload=function(){
             console.log('script loaded',src);
             resolve("yes")
             callback()
             
        }
        script.onerror=function(){
            console.log('Script not loaded',src);
            reject('no')
        }
        document.body.append(script)
    })
 }
 

 loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',hello)
