let num=[1,2,3,4,5,6,7,8,9,10];
const newNums= num.map((value)=>{
    return value+10;
})
// console.log(newNums)


const num5= num
           .map((value)=> value*10)
           .map((value)=> value+1)
           .filter((value)=>value>=40)
   console.log(num5)        



