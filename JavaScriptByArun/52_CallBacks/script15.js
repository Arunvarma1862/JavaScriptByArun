
function loadscript(src,callback){
    let script=document.createElement('script')
    script.src=src;
    script.onload=function(){
        console.log('script loaded ',src);
        callback(null,src);
      
    }
    script.onerror=function(){
        console.log('src is not found');
        callback(new Error('src is not avail')) 
    }
    document.body.append(script);

}

// function hello(error,src){
//     if(error){
//         console.log(error);   
//     }
//     else{
//          alert('hello '+ src)
         
//     }
    
// }
// function GM(){
//     alert('hello')
// }

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function hello(error,src){
    if(error){
        console.log(error);   
    }
    else{
         alert('hello '+ src)
         
    }
    
},loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function GM(){
    alert('hello')
}))


// function hello(){
//     console.log('hiii');
    
// }
// function hii(callback){
//     console.log('hello');
//     callback()
    
// }
// hii(hello)