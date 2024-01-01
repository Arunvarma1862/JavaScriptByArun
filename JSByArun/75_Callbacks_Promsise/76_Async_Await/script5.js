// sycnhonorus

console.log("step1")
console.log('step2');
console.log('step3');


// async function time(){
//     console.log('Part2');
// }
// setTimeout(time,2000)

 function time(){
  
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log("hellos");
            resolve("Part2")
        }, 2000);
    })
} 



//Asynvchronus
async function main(){

    console.log('part1');
    let a=await time();
    console.log('Hello ',a);
    

    // await time();
    console.log('Part3');
    // console.log(x);
    

//   function time(){
//      console.log('Part2');
// }
// setTimeout(time,2000)
// setTimeout(() => {
    
//     console.log('Part2');
// }, 2000);

}
  main()
  console.log('Hiii');
  



