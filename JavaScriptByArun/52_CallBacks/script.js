
// sychronous
// const prompt=require('prompt-sync')({sigint:true});
// let a=prompt('enter name')
// let b=prompt('enter age')
// let c=prompt('enter hobby')
// console.log(a,b,c);

// Asynchronous

// console.log('1');
// console.log('2');
// function time(){
//     console.log('3');
    
// }
// setTimeout(time,2000);
// console.log('4');
// console.log('5');

// CallBack

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,callback){
//     callback(a,b)
// }

// calculator(1,2,sum);


// function hello (){
//     console.log('hello');
// }
// function goodmorning(callback){
//     console.log('goodMorning'); 
//     callback();
// }
// goodmorning(hello);



function loadscript(src,callback){
    let script= document.createElement('script')
    script.src=src;
    script.onload=function(){
        console.log('script loaded',src);
        callback(null,src);
    
    }
    script.onerror=function(){
        console.log('script error',src);
        callback(new Error('src is not found'))
        
    }
    // script.onload=callback()
    document.body.append(script)
}

function hello(error,srcc){
    if(error){
        console.log(error);
        return;
    }
    alert('hello world'+ srcc)
}
function goodmorning(src){
    alert("good Morning"+src)
}

loadscript('https://cdn.jssdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',hello);

// loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',function good(){
//     alert('sure');
//     console.log('script loaded');
// });





