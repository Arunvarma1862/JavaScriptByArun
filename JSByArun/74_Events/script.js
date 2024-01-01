let button=document.getElementById('btn')


// list of mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener('click',()=>{
//     alert("Hello World");
//     document.querySelector('#btn').innerHTML="Hello"
//     document.getElementById('btn').style.backgroundColor="Green"
//     document.getElementById('btn').style.color="white"
   

// })
function color(){
    return "Green";
}
button.addEventListener('dblclick',()=>{
    
    document.querySelector('.box').innerHTML="You have clicked that change content button"
    document.querySelector('.box').style.backgroundColor= color();

}) 
// button.addEventListener('contextmenu',()=>{
     
//     alert('Right clicked')

// })
document.addEventListener('keydown',(e)=>{
     
    console.log(e)
    console.log(e.key, e.keyCode,e.type, e.currentTarget)

})
button.removeEventListener('dblclick',()=>{
     
   
    document.querySelector('.box').innerHTML="You have clicked "
})
