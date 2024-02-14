

let text=["intalizing ","Hacking the username","username Hacked","username is shami","password is 123456","Done"];


 const sleep= async(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds*1000);
    })
}

let a=sleep();
console.log(a)

const additem= async(item)=>{

    await sleep(2)
    console.log(item);
    let src= document.createElement('div');
    src.innerHTML=item;
    document.body.children[0].append(src)
}


let t= setInterval(() => {
let last= document.getElementsByTagName('div');
last=last[last.length-1];
if(last.innerHTML.endsWith('...')){
last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
}
else{
    last.innerHTML=last.innerHTML+"."
}
}, 100);

(async ()=>{
    for(let key of text){
        await additem(key)
    }
    await sleep(2);
    clearInterval(t)
})()

