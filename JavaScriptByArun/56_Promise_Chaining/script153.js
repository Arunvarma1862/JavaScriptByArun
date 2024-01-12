const loadscript=(src)=>{
    return new Promise((resolve,reject)=>{
       let script= document.createElement('script')
       script.src=src;
      
       script.onload=()=>{
        // console.log('script loaded');
        resolve('script loaded')
       }
       script.onerror=()=>{
        reject('script is not loaded')
       }
       document.body.append(script)
    })
}
let p1=loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')

p1.then((value)=>{
    console.log(value);
    return loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
    
}).then((value)=>{
    console.log('2nd script loaded');
    // console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})
