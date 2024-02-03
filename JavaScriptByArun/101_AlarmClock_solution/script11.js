
const play=()=>{
    var audio= new Audio('./Believe.mp3')
    audio.play()
}

setInterval(() => {

    let d = new Date();
    let time= document.getElementById('time')
    time.innerHTML=d.toDateString()+ ' '+ d.toTimeString()
    
}, 1000);

const Alarm=(seconds)=>{


    let d= new Date().getTime()
    console.log(d)
    setTimeout(() => {
        play()  
    }, seconds*1000);

    setInterval(() => {

        secondsLeft= -(new Date().getTime()-(d+seconds*1000))
        console.log(secondsLeft)
        let Alarm=document.getElementById('Alarm')
    if(secondsLeft >0){
        
        Alarm.innerHTML=`Alarm in ${Math.floor(secondsLeft/1000)}`
    }
    
    }, );
}

let button = document.getElementById('but');
button.addEventListener('click',()=>{
    Alarm(5)
})

let a=Math.floor(1000/1000);
let b=Math.floor(Math.random())
let k=Math.floor(Math.random()*6)
console.log(k,b,a)