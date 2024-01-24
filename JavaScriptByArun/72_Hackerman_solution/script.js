

let text=["hello1","hello2","hello3","hello4","hello5"];


const sleep=async (seconds)=>{
   return new Promise((resolev,reject)=>{
    setTimeout(() => {
        resolev(true);
    }, seconds*1000);
   })
}

const additem=async (item)=>{
   await sleep(2);
    let src= document.createElement('div');
     src.innerHTML=item
    document.body.children[0].append(src);
    console.log(item);

    // let cont= document.getElementById('container')
    // console.log(cont.innerHTML);
    // cont.innerHTML= cont.innerHTML + item + "<br>"
    
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

(async()=>{
    for(let key of text){
        await additem(key)
        
    }
    await sleep(2)
        clearInterval(t)
})()


