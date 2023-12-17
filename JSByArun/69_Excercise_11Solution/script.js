
const prompt= require("prompt-sync")({sigint:true});

// let num=[1,2,3,4,5,6]

// let cuu=num.reduce((a,b)=>{
//     return a*b;
// })
// console.log(cuu)




// let numm=prompt("enter number");
// let value=1;
// for(let i=1;i<=numm;i++){

//     value=value*i;

// }
// console.log(value)

let a=6

  function factorial(number)
  {
    let arr=  Array.from(Array(number+1).keys());
    console.log(arr)
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>a*b)
      return c;
  // console.log(c)
  
  }
  console.log(factorial(a))
 

 

//   function fac(number1)
//   {
//     let k=1;
//     for (let index = 1; index <= number1; index++) {
//         k=k*index;
        
//     }
//     return k;
//    // console.log(k)
//   }

//   console.log(fac(a))
