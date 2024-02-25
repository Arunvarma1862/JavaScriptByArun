let sub= document.getElementById('submit');
sub.addEventListener('click',(e)=>{
    e.preventDefault();
    let titlec= title.value;
    let descc= desc.value;
    localStorage.setItem('todo',JSON.stringify([titlec,descc]));
    console.log(e);
    let t= document.getElementById('todo');
    t.innerHTML=`
       <h1>${titlec}</h1>
       <h2>${descc}</h2>
    `
   title.value="";
   desc.value=" "

})

let del= document.getElementById('delete');
del.addEventListener('click',(e)=>{
    e.preventDefault();
    let ddd= document.getElementById('del')
    let a= ddd.value;
    localStorage.removeItem(a);
    let t= document.getElementById('todo');
    t.innerHTML=`
    
    `
    ddd.value =""
})

let Acc= document.getElementById("Access");
Acc.addEventListener('click',(e)=>{
    e.preventDefault();
    let acc= document.getElementById('Acc')
    let accvalue= acc.value
    let a=localStorage.getItem(accvalue);
    console.log(JSON.stringify(a));
    console.log(e);
    let TA= document.getElementById("todoAccess")

    if(a!=null){
        TA.innerHTML=`
        <h1>${a}</h1>
        `
        setTimeout(() => {
            TA.innerHTML=" "
         }, 5000);
    }

    else{
        TA.innerHTML=`
        <h1>No data</h1>`

        setTimeout(() => {

            TA.innerHTML=" "
            
        }, 5000);
    }
    acc.value=" "
  
})