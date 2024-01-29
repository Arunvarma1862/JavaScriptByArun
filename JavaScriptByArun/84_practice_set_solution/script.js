let sub= document.getElementById('submit');
sub.addEventListener('click',(e)=>{
     e.preventDefault()
     let titlec = title.value;
     let descc = desc.value;
     localStorage.setItem('todo',JSON.stringify([titlec,descc]))
    console.log(e);
    let t= document.getElementById('todo');
    t.innerHTML=`
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `

    title.value="";
    desc.value=""
    
})

let del= document.getElementById('delete');
del.addEventListener('click',(e)=>{
     e.preventDefault()
     localStorage.removeItem('todo')
     console.log(e);
     let t= document.getElementById('todo');
     t.innerHTML=`

    `
})

// let Acc= document.getElementById('Access');
// Acc.addEventListener('click',(e)=>{
//      e.preventDefault()
//     let a= localStorage.getItem('todo')
//     console.log(JSON.stringify(a));
//      console.log(e);
//      let Ta=document.getElementById('todoAcess');

//      if(a!=null){
//         Ta.innerHTML=`
//         <h1>${a}</h1>
//         `
//      }
//      else{
//         Ta.innerHTML=`
//           <h1>No data</h1>
//         `
//         setTimeout(() => {
//             Ta.innerHTML=`
           
//           `
//         }, 5000);
//      }
    
// })

let Access= document.getElementById('Access');
Access.addEventListener('click',(e)=>{

    e.preventDefault();
    let AccessValue=Acc.value;
    let a= localStorage.getItem(AccessValue);
    console.log(JSON.stringify(a));
     console.log(e);
     let Ta=document.getElementById('todoAcess');

     if(a!=null){
        Ta.innerHTML=`
        <h1>${a}</h1>
        `
     }
     else{
        Ta.innerHTML=`
          <h1>No data</h1>
        `
        setTimeout(() => {
            Ta.innerHTML=`
           
          `
        }, 5000);
     }

     Acc.value=""
    

})