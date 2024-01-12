const generateColor = () => {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
};
let button = document.getElementById("btn");
let color = document.querySelector(".conatiner");
button.addEventListener("click", () => {
  color.style.backgroundColor = generateColor();
});

function time(as){
console.log(as);

  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDate();

  let Hour = document.getElementById("hour");
  let Min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let date = document.getElementById("date");

  Hour.innerHTML = h + "<b> Hr &nbsp;</b>";
  Min.innerHTML = m + "<b> M &nbsp;</b>";
  sec.innerHTML = s + "<b> Sec &nbsp;</b>";
  date.innerHTML = d + "<b> th </b>";

}
setInterval(time,1000,"hello")

// let time=document.querySelectorAll('.time');
// console.log(time);
// let arr=Array.from(time);
// arr.forEach((e)=>{
//     console.log(e);

//     e.innerHTML = h + "<b> Hr &nbsp;</b>";
//     e.innerHTML = m + "<b> M &nbsp;</b>";
//     e.innerHTML = s + "<b> Sec &nbsp;</b>";
//     e.innerHTML = d + "<b> th </b>";
// })
