let button= document.getElementById('btn');
let  hello= document.getElementById('box')

button.addEventListener('click',()=>{
    // hello.innerHTML="hello world"
})

button.addEventListener('dblclick',()=>{
    document.querySelector('#box').innerHTML="<b>Hello world2</b>"
})

button.addEventListener('mouseover',()=>{
    // alert("hello")
})

button.addEventListener('contextmenu',()=>{
    alert("hello")
})

document.addEventListener('keydown',(e)=>{
   console.log(e);
   console.log(e.key);
   
   
})