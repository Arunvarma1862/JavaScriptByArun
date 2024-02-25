
let text=["intailizing","Hacking the username","username is virat","password is 218","done"];

const sleep= async(seconds)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds*1000);
    })
}


 let a= sleep();
 a.then((value)=>{
    console.log(value)
 })
const additem=async(item)=>{

    await sleep(2);
    let srcc= document.createElement('div');
    srcc.innerHTML=item;
    document.body.children[0].append(srcc)
}

let t= setInterval(() => {

    let last= document.getElementsByTagName('div');
    last= last[last.length-1];
    if(last.innerHTML.endsWith('...')){
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else{
        last.innerHTML= last.innerHTML+"."
    }
    
}, 100);

(async ()=>{
    for(let key of text){
        await additem(key)
    }
    await sleep(2);
    clearInterval(t)
} 
    
)()