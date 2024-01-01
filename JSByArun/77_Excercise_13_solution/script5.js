function createcard(src,duration,Thumbail,Author,views,months){
  let viestr;
   
    if(views<1000){
        viestr=views;
    }
    else if(views>1000000){
        viestr= views/1000000+"M"
    }
    else{
        viestr= views/1000+"K"
    }
    let html=` <div class="container">
    <div class="card">
      <div class="image">
        <img
          src=${src}
          alt=""
        />
        <div class="capsule">${duration}</div>
      </div>
      <div class="text">
          <h1>${Thumbail}</h1>
          <p>${Author}.${viestr}views.${months}months ago </p>
      </div>
    </div>
  </div>`
  document.querySelector('.container').innerHTML=document.querySelector('.container').innerHTML+html;
}

createcard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw", "50:36","Introduction sigma web development#5","Harry",5200000,10)
