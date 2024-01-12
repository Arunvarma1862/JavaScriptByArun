// 3

let go= document.getElementById('google');
go.addEventListener('click',()=>{
    window.location='https://www.google.com'
})

//4

// const fetchContent= async(url)=>{
//    let  con= await fetch(url)
//     let a= await con.json();
//     return a;
// }
// setInterval(async function()  {
//     let url='https://jsonplaceholder.typicode.com/todos/1';
//     console.log(await fetchContent(url));
    

// }, 2000);

//5
setInterval(() => { 
// document.querySelector('.bulb').classList.toggle('bulbstop')
}, 500);
