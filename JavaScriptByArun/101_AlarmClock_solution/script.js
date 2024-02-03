

function play(){
    var audio= new Audio('./Believe.mp3');
    audio.play();
}


setInterval(() => {
    let d= new Date();
    let time= document.querySelector('.time')
    time.innerHTML = d.toDateString()+ ''+ d.toTimeString();   
}, 1000);


const alarm=(seconds)=>{
   let d =  new Date().getTime();
    setTimeout(() => {
        play()
    }, seconds*1000);


    setInterval(() => {
        secondsLeft= -(new Date().getTime()-(d+seconds*1000))
        let sec= document.getElementById('seconds');
      
        if(secondsLeft>0){
          sec.innerHTML=`The Alarm will ring in ${Math.floor(secondsLeft/1000)}`
        }
        
    },);

}

let button= document.getElementById('btn');
button.addEventListener('click',()=>{
    alarm(10);
})

