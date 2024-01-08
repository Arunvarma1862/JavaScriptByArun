
let button= document.getElementById('btn')

let x=function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    alert("hello1")
    }
    
let y=function(){
    alert("hello2")
    }

  //  Method-3
    
    // button.onclick=function(){
    //     alert("hii")
    // }

button.addEventListener('click',x);
// button.addEventListener('click',y);

// let a=prompt("enter number");
// if(a=="2"){
//     button.removeEventListener('click',x)
// }