// let a=document.getElementsByClassName('container')[0];
// console.log(a);
// a.insertAdjacentHTML('beforebegin',"<p>Hello world</p>")
// a.insertAdjacentHTML('afterend',"<p>Hello</p>")
// a.insertAdjacentHTML('afterbegin',"Hii")
// a.insertAdjacentHTML('beforeend',"Hbyeii");

// a.remove()

// let div=document.createElement('span')
// div.className="Hellooooo";
// div.innerHTML="Hii guys hello World"
// a.insertAdjacentElement('beforeend',div)

// function call(){
//     return "hello"
// }
// let b=call();
// console.log(b);

// const sum=(a,b)=>{
//     return a*b;
// }
// let n=sum(9,6)
// console.log(n);


//1

let obj={
    harry:95,
    rohan:56,
    aakash:63
}
for(let key in obj){
    console.log(`${key} the result is ${obj[key]}`);
    
}

const mean =(a,b,c,d)=>{
    return Math.round(a+b+c+d/4);
}
let a=mean(5,6,8,9);
console.log(a);

for(let i=0;i<Object.keys(obj).length;i++){
    console.log('the marks of '+ Object.keys(obj)[i]+" is "+ obj[Object.keys(obj)[i]]);
    
}
let correctNumber=63;
const prompt=require('prompt-sync')({sigint:true});

let user;
user=Number.parseInt(user);

while(correctNumber!=user)
{
     user=prompt("enter Number")
     console.log('TryAgain');
     
}