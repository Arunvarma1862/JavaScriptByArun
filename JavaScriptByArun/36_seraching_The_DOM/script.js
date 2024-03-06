let ctitle=document.getElementsByClassName("card-title")[0]
console.log(ctitle)
ctitle.style.color="blue"

let firstcard=document.getElementById("firstcard")
console.log(firstcard)
firstcard.style.backgroundColor="violet"


let cards=document.querySelectorAll(".card-title")
cards[0].style.color="blue";
cards[1].style.color="red";
cards[2].style.color="green";
console.log(cards) 


document.querySelector(".this").style.color="cyan"
document.querySelector(".this").style.backgroundColor="green"

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("searching"))
console.log(document.body.getElementsByClassName('.card-title'))