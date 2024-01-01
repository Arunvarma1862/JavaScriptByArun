
console.log(a1);
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(56)
        }, 1000);
    })
}

function sum(a,b,c,d){
    return a+b+c+d;
}
   // IIFE
(async function main(){
    
   
    // let a =await sleep();
    // console.log(a);
    // let b=await sleep();
    // console.log(b)

    // Destructing
    // let [x,y,...rest]=[4,6,5,8,9,7,6];
    // console.log(x,y,rest)

    let obj={
        a:1,
        b:2,
        C:3
    }
    let {a,b}=obj;
    console.log(a,b)

// spread syntax
    let arr=[1,5,9,8]
    console.log(arr[0]+arr[1]+arr[2]+arr[3])
    console.log(sum(arr[0],arr[1],arr[2],arr[3]));
    console.log(sum(...arr))
    const objj=sum(...arr);
    console.log(objj)

    
})()

var a1=6;

// hosting

harry("hello")
function harry(a){
    console.log(a)
}
// Hello()

const Hello=()=>{
    console.log("hii")
}
// console.log(abh);

let abh= function(){
    console.log("excuted");
}
console.log(abh);


