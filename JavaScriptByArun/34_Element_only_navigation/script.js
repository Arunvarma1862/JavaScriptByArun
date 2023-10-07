const changeBgBlue=()=>{
    document.body.firstElementChild.style.background="blue"
}

let b= document.body;
console.log("first child is ", b.firstChild);
console.log("first element child is ", b.firstElementChild);
console.log(b.firstChild);
console.log(b.firstChild.nextElementSibling);
console.log(b.firstElementChild.firstElementChild.children)