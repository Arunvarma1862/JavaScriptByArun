// let a=0;
// // while(a<10){
// //     console.log(a);
// //     a++;
// // }

// let b=["hello","virat","njk"]
// while(a< b.length){
//     console.log(`value of ${b[a]}`)
//     a=a+1;  
// }


// // do{
// //     console.log(a)
// //     a= a+2;
// // }while(a<10);








// let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


function hello(){
    let a=1;
    function add(){
      
       return  a++;
    }
    return add
}

let result = hello();
console.log(result())
console.log(result())
console.log(result())
a=5;
console.log(result())