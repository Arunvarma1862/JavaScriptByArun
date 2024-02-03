// message = "good Global";

// function hello() {
//   let message = "goog Morning";
//   {
//     let message = "good Afternoon";
//     console.log("Hello 1 " + message);
//   }
//   console.log("Hello 1 " + message);

//   let c = function hello2() {
//     console.log("I am cc");
//   };
//   return c
// }
// let k =hello();
// k()

// function hello(){
//     let name="good Morning";
//     function hii(){
//         console.log('message 1 '+ name)
//     }
//     name="good Afternoon hello"
//     return hii
// }

// let v= hello()
// v()

// function revers(){

// const v1=()=>{
//     let a=1
//     console.log(a)
//     const v2=()=>{
//         // let a=2
//         console.log(a)
//         const v3=()=>{
//             // let a=3
//             console.log(a)
//         }
//         v3()
//     }
//     a=999
//     v2()
// }
//  return v1
// }
// let ka= revers()
// ka()

function hello() {
  const a1 = () => {
    let a = 1;
    console.log(a);

    const a2 = () => {
      // let a=2;
      console.log(a);

      const a3 = () => {
        // let a=3;
        console.log(a);
      };
      a3();
    };
    
    a2();
  };
  return a1;
}
let a = hello();
a();



