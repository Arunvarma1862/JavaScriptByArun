

// problem 1

// const a=(text)=>{
    
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 resolve(text)  
//             }, 2000);
//         })

// }

// (
//     async()=>{
//         let text= await a("hello")
//         console.log(text)
//         let text2= await a("world")
//         console.log(text2)
//     }
// )()

// problem 2

const average=(a,b,c)=>{
    
return a+b+c/2
}

let arr=[1,2,3];
console.log(average(...arr))


// problem 3

const ar=(n,text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(text)
        }, n*1000);
    })
}

(
    async()=>{
        // let timeout= Math.floor(Math.random()*6+1)
        // console.log("timout1 " +timeout)
        // let text= await ar(timeout,"hello");
        // console.log(text)
        // console.log('timeout2 '+timeout)
        // let text2= await ar(timeout,"World");
        // console.log(text2)

        let text=await ar(2,"hello");
        console.log(text)
        let text2=await ar(5,"world");
        console.log(text2)
    }
)()

// problem 4

function simpleInterest(p,r,t){
    return p*r*t/100
}

console.log(simpleInterest(1000,5,1))