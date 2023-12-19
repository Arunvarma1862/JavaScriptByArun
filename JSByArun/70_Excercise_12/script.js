console.log("Hello World")

// function generateColor(){
     
//     let letters="0123456789ABCDEF";
//     let color="#";
//     for(let i=1;i<6;i++){
//         color= color+letters[Math.floor(Math.random()*16)]
//     }
//     return color;
// }

// function applyRandomColor(element){
//     let col;
 
//   col=document.querySelectorAll(element).forEach(elements=>{
//     elements.style.backgroundColor=generateColor();
//  })


// }

// applyRandomColor(".box");

// let ed= document.querySelectorAll('.box');

// let obj={
//     1:"red",
//     2:"blue",
//     3:"pink",
//     4:"yellow",
//     5:"green",
//     6:"violet"
// }

// let i=Math.floor(Math.random()*6);
// ed.forEach(e=>{
//     e.style.backgroundColor=obj[i];
// })









function generateColor(){
     
    let letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color= color+letters[Math.floor(Math.random()*16)];
        console.log(color);
    }
    return color;
    
}   

let but= document.getElementById('button');

but.addEventListener('click',()=>{

    // alert('hello')
    // document.querySelector('.box').innerHTML="Box1"
    let e= document.getElementsByClassName("box");

for(let i=0;i<5;i++){
e[i].style.backgroundColor =generateColor()
console.log(e[i])
}

  //  e.querySelector('.box').style.backgroundColor="green"
   

})





