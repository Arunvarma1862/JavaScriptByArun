// let url="https://kontests.net/api/v1/all"

//1

function hello(){
let url= fetch('https://jsonplaceholder.typicode.com/posts')

url.then((response)=>{
    return response.json()
}).then((resp)=>{
    console.log(resp);
    ihtml="";
    for(item in resp){
        console.log(resp[item]); 
        // console.log(resp[item].id);

        ihtml +=`
        <div class="card mx-4 my-2" style="width: 18rem;">
        <img src="https://www.shutterstock.com/image-photo/text-context-behind-torn-brown-260nw-1914725956.jpg" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${resp[item].id}</h5>
          <p class="card-text">${resp[item].title}</p>
          <p class="card-text">${resp[item].body}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> 
        
        `  
    } 
    let card=document.getElementById('cardContainer')
    card.innerHTML= ihtml
})

}

let but=document.getElementById('btn');
but.addEventListener('click',()=>{
    hello();
})

let button=document.getElementById('btnn');
button.addEventListener('click',()=>{

   
})



//2  and  3  nd 4 



let n= localStorage.getItem('note');
alert('the note is '+ n)


let a=prompt("enter note");

    localStorage.setItem("note" ,a)


let c= confirm("do you want to clear ")
    
if(c){
    localStorage.removeItem('note')
}





