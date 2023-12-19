function createcard(title,cName,views,monthold,duration,thumbail){
    let viewstr;
    if(views<1000){
        viewstr=views;
    }
    else if(views>1000000){
        viewstr=views/1000000+"M"
    }
    else{
        viewstr=views/1000+"k";
    }
    let html=` <div class="card">
    <div class="image">
        <img src="${thumbail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewstr} views . ${monthold} months ago</p>
    </div>
</div>`
//document.querySelector('.container').children[0].innerHTML=document.querySelector('.container').innerHTML + html;
document.querySelector('.container').innerHTML=document.querySelector('.container').innerHTML + html;
//document.querySelector('.container').innerHTML=document.querySelector('.container').children[1].innerHTML+html;
}

createcard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 5600000, 10, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createcard("Introduction to Backend and settled boy #2| Sigma Web Dev video #2", "CodeWithHarry", 5600000, 10, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createcard("Introduction to Backend | Sigma Web Dev video #3", "CodeWithHarry", 5600000, 10, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")