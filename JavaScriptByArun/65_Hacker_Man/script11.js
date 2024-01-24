
const additem= async (item)=>{
    await randomdelay();
    let src= document.createElement('div');
    src.innerHTML=item;
    document.body.children[0].append(src)
}


const randomdelay=()=>{
    return new Promise((resolve,reject)=>{
        timeout=Math.random()*6+1;
        console.log(timeout);
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}
async function main(){

console.log('a');

let t= setInterval(() => {

    console.log('1');
    let last= document.getElementsByTagName('div');
    // console.log(last);
    last=last[last.length-1];
    // console.log(last);
    if(last.innerHTML.endsWith('...')){
   last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else{
        last.innerHTML=last.innerHTML+"."
    }
}, 100);
console.log('2');
let text=["intalizing ","Hacking the username","username Hacked","username is shami","password is 123456","Done"]
console.log('3');
for(let key of text){
  await additem(key)
}
console.log('4');

  await randomdelay();
   clearInterval(t)


}

main()


