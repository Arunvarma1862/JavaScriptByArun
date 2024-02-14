
// async function hello(){

//     let DelhiWether=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("27 deg")
//         }, 2000);
//     })
//     let bagalorewether= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("21 deg")
//         }, 5000);
//     })

//     // DelhiWether.then(alert);
//     // bagalorewether.then((value)=>{
//     //     alert(value)
//     // })
//     console.log('Fetching dw');
//     let dw= await DelhiWether
//     console.log('Fetched dw' + dw);
//     console.log('Fetching bw');
//     let bw= await bagalorewether
//     console.log('Fetched bw' + bw);

//     return [dw, bw]
     
// }



// const cheery=  async ()=>{
//     console.log('hello cheery');  
// }
// async function main(){
//     console.log('Whetther report');
// let a= await hello()
// let b= await cheery()
// console.log(a);

// }
// main()


// function hello(){
//     console.log('hello');
    
// }
// function main(callback){
//     console.log("main");
//     callback()
    
// }
// main(hello)


// function sum(a,b){
//     console.log(a+b);
    
// }

// function calculater(a,b,callback){
//     callback(a,b)
// }
// calculater(1,2,sum)



function mul(a,b){
    console.log(a*b)
}

function calculator(a,b,callback){
    callback(a,b)
}

calculator(2,3,mul)


















// async function hello(){
//     return 5;
    
// }

// hello().then((value)=>{
//     alert(value)
// })