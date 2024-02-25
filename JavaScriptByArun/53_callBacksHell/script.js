

function loadscript(src,callback){

    let script= document.createElement('script')
    script.src=src;

    script.onload=function(){
        console.log('script loaded '+ src);
        callback(null,src)
        
    }
    script.onerror=function(){
        console.log('script not loaded',src);
        callback(new Error('src is not found'))
    }
    document.body.append(script)
}

function hello(error,src){
    if(error){
        console.log(error);  
    }
    else{
        alert('hello'+ src)
    }
}

// function Gm(error,src){
//     if(error){
//         console.log(error);
        
//     }
//     else{
//         alert('GoodMorning '+ src)
//     }
// }

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
function Gm(error,src){
    if(error){
        console.log(error);   
    }
    else{
        alert('GoodMorning '+ src)
    }
}),loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',hello)


// function feedback(){
//     setTimeout(() => {
//          console.log('order food');
//          setTimeout(() => {
//             console.log('Eaten items');
//             setTimeout(() => {
//                 console.log('feedback'); 
//                 setTimeout(() => {
//                     console.log("Rating");
//                 }, 2000);
//             }, 2000);
//          }, 2000);   
//     }, 2000);
// }

// feedback()


// function hello(s){
//     console.log('hello',s);
    
// }

// function hii(){
//     console.log('hii');  
// }

// function bye(s){
//     console.log('bye',s);
    
// }
// function main(s,callback){
//     console.log(s,'done');
//     callback()
//     callback(s)
// }
// main('hii',bye)

// (setTimeout(() => {
//      main("1",hello)
//      setTimeout(() => {
//         main("2",hii)
//          setTimeout(() => {
//               main("3",bye)
//          }, 2000);
//      }, 2000);
// }, 2000))




// function feedback(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Eaten food');
//         }, 2000);
//     })
// }
// let p1= feedback();
// p1.then((value)=>{
//     console.log(value);
    
//      return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("paid")
//         }, 2000);
//      })
// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Nice food")
//         }, 2000);
//     })
// })
// .then((value)=>{
//     console.log(value);
    
// })