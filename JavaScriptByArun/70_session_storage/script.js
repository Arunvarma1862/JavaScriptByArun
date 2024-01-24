sessionStorage.setItem('name',"helooo");

window.onstorage=(e)=>{
    alert("changed")
    console.log(e);
    
}