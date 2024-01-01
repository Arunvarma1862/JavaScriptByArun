
// const prompt= require('prompt-sync')({sigint:true});






let a= prompt('Enter a number')
let b= prompt('Enter b number')
if(isNaN(a) || isNaN(b)){
    // throw SyntaxError("data is not allowed")
    let errors=new SyntaxError("data is not alloed");
    console.log(errors);
    
}
let sum= parseInt(a)+parseInt(b)
function main(){
    let x=5;
try {
        console.log("the sum is "+ sum*x)
         return true;

} catch (error) {

    console.log("Error ",error.stack)
    return false
    
}
finally{
    console.log("db closed")
}
     console.log("db closed2")

}
// In a function any return value in try or catch without using finally  , db wont closed
main()
// let m=main()

// console.log("nldn")

 // try catch wont work for settimeout, if setTimeout contains error
// try {
//     setTimeout(() => {
//         console.log("the sum is "+ sum*x)
//     }, 3000);

// } catch (error) {

//     console.log("Error ")
    
// }

