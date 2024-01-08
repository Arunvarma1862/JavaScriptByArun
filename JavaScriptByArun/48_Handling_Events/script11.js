let button=document.getElementById('btn');

let x= function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    alert('hello World1');
}

let y= function (){
    alert('hello World2');
}

button.onclick=function(e){
    alert('sure')
}

button.addEventListener('click',x)

// button.addEventListener('click',y)

// let a= prompt("enter number")
// if(a=="2"){
//     button.removeEventListener('click',x)
// }