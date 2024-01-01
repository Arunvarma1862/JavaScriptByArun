console.log("this is Aync and Await");

//  function getdata() {
// //stimulate getting data from server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(566);
//     }, 3500);
//   });
// }

// settle means resolve or reject
// resolve means promise settled succesully
// reject means promise not settled succesully

async function getdata() {
//  let a=   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  let data=   await a.json();
let a=await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    let dataa = await a.text();
    // console.log(data);
    return dataa;
  }

async function main() {
  console.log("loading modules");
  console.log("Do someting else");
  let data = await getdata();
  console.log(data);
  console.log("process done");
  console.log("task2");
}
main()
// 


// One way with using then

// console.log("loading modules");
// console.log("Do someting else");
// let data = getdata();

// data.then((v) => {
//   console.log(v);
//   console.log(data);
//   console.log("process done");
//   console.log("task2");
// });
