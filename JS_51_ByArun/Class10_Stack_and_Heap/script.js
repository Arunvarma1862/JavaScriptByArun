

// stack(primtive) and heap(Non-primtive)
// stack makes it copy of the value, and heap changes original value which refre 

let a = "hello";
let b= a;
b="hiiiii";

console.log(a)
console.log(b)


let  itemOne={
    name:"virat",
    email:"virat@gmail.com"
}

let itemTwo= itemOne;

itemTwo.email="hello@gmai.com";

console.log(itemTwo.email)
console.log(itemOne.email)



