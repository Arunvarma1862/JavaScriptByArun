  // one

// let p1= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve()
//         console.log('hello')
//     }, 1000);
// })
// p1.then((value)=>{
//     console.log("promise consumed")
// })

// const var1= async ()=>{
//     let an= await p1;
//     console.log(an)
// }
// var1() 


//two

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//    console.log("Promise2")
// })


// Three

// const p3= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username:"hello",email:"hello@gmail.com"}) 
//     }, 1000);
// })
// p3.then((value)=>{
//     console.log(` username is ${value.username} and email is ${value.email}`)
// })


// Four

// const p4= new Promise((resolve,reject)=>{
//     setTimeout(() => {

//         let error =true;
//         if(!error){
//             resolve({username:"hello",password:12345})
//         }
//         else{
//             reject({username:null,password:null})
//         }
        
//     }, 1000);
// })


// p4.then((value)=>{
//     console.log(value)
//     return value.username
// }).then((value2)=>{
//     console.log(value2)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise")
// })


// five

// const p5=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const error=true;
//         if(!error){
//             resolve("javascript is solved")
//         }
//         else{
//             reject('javascript is not solved')
//         }
        
//     }, 1000);
// })

// async function hello(){

//     try{
//         let a= await p5;
//         console.log(a)
//     }
//     catch(error){
//        console.log(error)
//     }
    
// }
// hello()



// getAllusers  method1

// async function getAllUsers(){

//     const a= await fetch('https://api.github.com/users/hiteshchoudhary')
//     return a.json()
// }
// const jkl=async ()=>{
//     let bn= await getAllUsers();
//     console.log(bn)
//     console.log(bn.followers)
// }
// jkl()

// getAllusers  method2


// async function getAllusers(){

//     try{
//        const response=  await fetch('https://api.github.com/users/hiteshchoudhary');
//        const result=  await response.json();
//        console.log(result)
//        console.log(result.followers)
//     }
//     catch(error){
//         console.log(error)
//     }

// }
// getAllusers()


// getAllusers  method3

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
   return response.json()
}).then((response2)=>{
    console.log(response2)
    console.log(response2.followers)
})
.catch((error)=>{
    console.log(error)
})