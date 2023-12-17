
// function generate_color(){
    
//     let letters="0123456789ABCDEF";
//     let color="#";

//     for(let i=0;i<6;i++){
//     color= color+letters[Math.floor(Math.random()*16)];
//     console.log(color);
//     }
//     return color;
   
// }
   
  
// let e=document.getElementsByClassName('box');
// console.log(e)
// for(j=0;j<5;j++){
//     e[j].style.backgroundColor=generate_color();
// }


// let edd=document.querySelectorAll('.box');
// let obj={
//     1:"red",
//     2:"blue",
//     3:"orange",
//     4:"yellow",
//     5:"green",
//     6:"aqua"
// }

// edd.forEach((e=>{
//     let i=Math.floor(Math.random()*6);
//     e.style.backgroundColor=obj[i]
// }))


let a =document.querySelector('.container').children;
console.log(a, typeof a);

function generate_color(){
    let var1= Math.ceil(0+ Math.random()*255);
    let var2= Math.ceil(0+ Math.random()*255);
    let var3= Math.ceil(0+ Math.random()*255);
    return  ` rgb(${var1} ,${var2}, ${var3})`
}

Array.from(a).forEach((e=>{
    e.style.backgroundColor=generate_color();
}))
console.log(a)


// let box=document.getElementsByClassName('box');
// console.log(typeof box,box)
// for(let boxes of box){
//     const random_Color= Math.floor(Math.random()*16777215).toString(16)
//     const random_bgColor= Math.floor(Math.random()*16777215).toString(16)

//     boxes.style.backgroundColor="#"+random_bgColor;
//     boxes.style.Color="#"+random_Color;
// }

