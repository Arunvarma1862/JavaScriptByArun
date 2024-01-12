
//1
// function hello(a){
//     console.log('Hello world',a);
//     alert("helloo")
    
// }
// function goodMorning(a,callback){
//   console.log('GoodMorning',a);
//   callback(a);
  
// }
// goodMorning("hii",hello);


//2

// function sum(a,b){
//     console.log(a+b);
    
// }
// function calculater(a,b,callback){
//        callback(a,b)
// }
// calculater(1,5,sum)

//3

// function hello(){
//     console.log('hii');
//     alert('hii')
// }
// function Gm(src,callback){
// console.log(src);
// callback()

// }
// Gm('helloo',hello)

//4

const loadscript=(src,callback)=>{
   let script= document.createElement('script');
   script.src=src;
   script.onload=function(){
    console.log('Script Loaded');
    callback(null,src);
   }
   script.onerror=function(){
         console.log('src is not found');
         callback(new Error('src not found'))
   }
   document.body.append(script)
}

function hello(error,src){ 
    if(error){
        console.log(error); 
    }
    else{
        console.log("src: "+src);
        alert('heloo '+ src)
    }
   
}

loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',hello)

//5

// function player1(a){
//     console.log('virat',a);
    
// }
// function player2(){
//     console.log('shami');
    
// }

// function team(a,callback){
//     console.log('India');
//     callback(a);
// }

// team("hii",player1)


//6

// function loadscript(src,callback){
//     let script= document.createElement('script')
//     script.src=src;
//     script.onload=function(){
//         alert('sure')
//         console.log('hii');
//         callback()
//     }
//     document.body.append(script);
// }
// function callback(){
//     alert('heloo');
//     console.log('hello');
    
// }


// loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',callback);

//7

// function callback(a){
//     console.log(a,'hello');

    
// }

// function hello(a,callback){
//    console.log('hiii');
//    callback(a)
   
// }

// hello("hello",callback)

//8

function sum(a,b){
    console.log(a+b); 
}
function calculater(a,b,callback){
    callback(a,b)
}

calculater(1,668,sum)