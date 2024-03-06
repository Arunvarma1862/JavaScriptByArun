
// // Map method  -- array wont change
// let arrr= [42,51,63,57];
//  let a= arrr.map((value, index, array)=>{
//     console.log(value,index,array)
//     // return value+1;
//        return value + index;
// })
// console.log(a);


// // Array filter method -- original array wont change

// let arr2= [41,52,85,62,0,1,5,2];
// let j= arr2.filter((value)=>{
//      return value<55;
// })
// console.log(j, arr2)

// // Array reduce method


// let arrr3=[1,5,2,4,1,2,3];
// let a3=arrr3.reduce((h1,h2)=>{
//     return h1+h2;
// })
// console.log(a3);

// let arrr4= [4,5,8,7,6,];
// const reduce_function = (h1,h2)=>{
//     return h1+h2;
// }
//  let a6=arrr4.reduce(reduce_function);
//  console.log(a6);


// Map
// let arrr=[21,54,86,84,65];
//     let a =arrr.map((value,index,array)=>{
//         console.log(value,index,array)
//             return value +1;
//          })
//          console.log(a, typeof a)
//          console.log(arrr)

//          arrr.forEach((element)=>{
//             console.log(element,typeof element)
//          })

  // filter
  
//   let num=[12,85,96.74,56];
//  let p= num.filter((value)=>{
// return value>51;
//   })
//   console.log(p);


  // Reduce

//   let num2=[1,2,3,4,5];
// //   let m=num2.reduce((h1,h2)=>{
// //     return  h1+h2;
// //   })
// //   console.log(m,num2)

// const reduce=(h1,h2)=>{
//     return h1+h2;
// }

// let h=num2.reduce(reduce);
// console.log(h);

// let arr=[1,2,3,4,5,6];
// let newarr=[];
// // newarr=arr.map((value,index,array)=>{
// //         return value*2;
// // })
//     for(let i=0;i<arr.length;i++){
//            const l =arr[i]
//           newarr.push(l*2)
//     }  

// console.log(newarr)


// let arr= [11,22,33,44,55];
// let a= arr.map((value,index,array)=>{
//   console.log(value,index,array);
//   return value+1;
// })
// console.log(a, typeof a)

// arr.forEach((Element)=>{
//   console.log(Element*Element)
 
// })

// let a= arr.filter((value)=>{
//   return value >20;
// })
// console.log(a)


// let m= arr.reduce((h1,h2)=>{
//   return h1+h2
// })

// console.log(m,arr)

// const reduce=(h1,h2)=>{
//   return h1+h2
// }

// let m= arr.reduce(reduce)
// console.log(m)



// let arr=[11,22,33,44,55];
// let newarr=[];

// newarr= arr.map((value,index,array)=>{
//   return value*2;
// })

// for(i=0;i<arr.length;i++){
//   const l= arr[i]
//   newarr.push(l*2)
// }

// console.log(newarr)





let arr=[1,2,3,4,5];
// let arr="virat";
// let arr={
//   name:"virat",
//   des:"batsman"
// }
for(let key of arr){
  console.log(key )
}

