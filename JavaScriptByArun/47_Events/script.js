let ran=  document.getElementById('random');
let btn= document.getElementById('button');

btn.addEventListener('click',()=>{
    let num= Math.floor(Math.random()*100+1);
    ran.innerHTML=num+" Hello World";
})
btn.addEventListener('mouseover',()=>{
    // alert('hello')
})