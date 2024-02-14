const generateColor = () => {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
};

let button = document.getElementById("btn");
let color  = document.querySelector(".conatiner");
button.addEventListener("click", () => {
  color.style.backgroundColor = generateColor();
});

function time(as){
// console.log(as);

  let a = new Date();
  let clock= document.getElementById('time');
  // let h = a.getHours();
  // let m = a.getMinutes();
  // let s = a.getSeconds();
  // let d = a.getDate();

  // let Hour = document.getElementById("hour");
  // let Min = document.getElementById("min");
  // let sec = document.getElementById("sec");
  // let date = document.getElementById("date");

  // Hour.innerHTML = h + "<b> Hr &nbsp;</b>";
  // Min.innerHTML = m + "<b> M &nbsp;</b>";
  // sec.innerHTML = s + "<b> Sec &nbsp;</b>";
  // date.innerHTML = d + "<b> th </b>";

    // clock.innerHTML=a;
  let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
     };  

console.log(a.toLocaleTimeString("en-us", options));
clock.innerHTML=a.toLocaleDateString("en-us", options)

}

setInterval(time,1000,"hello")

// let times=document.querySelectorAll('.time')[0];
// console.log(times);
// let arr=Array.from(times);

// arr.forEach((e)=>{
//     console.log(e);

//     e.innerHTML = a + "<b> Hr &nbsp;</b>";
 
//})
