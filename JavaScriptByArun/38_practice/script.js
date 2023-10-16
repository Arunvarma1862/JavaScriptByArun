// document.getElementsByTagName("nav")[0].firstElementChild.style.color='green'
// document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

let li=document.getElementsByTagName("li")
for (let index = 0; index < li.length; index++) {
    document.getElementsByTagName("li")[index].style.color="cyan"
    
}

Array.from(document.getElementsByTagName("li")).forEach ((element)=>{
    element.style.background="Green";
})