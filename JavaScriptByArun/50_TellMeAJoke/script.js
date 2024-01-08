const jokes = [
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why was the math book sad? Because it had too many problems!",
    "Why did the chicken cross the playground? To get to the other slide!",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the computer go to the doctor? Because it had a virus!",
    "Why don't eggs tell jokes? Because they'd crack each other up!"
  ];
   let num=jokes.length
   console.log(num);
   let button=document.getElementById('btn');


button.addEventListener('click',()=>{
     // let random=Math.floor(Math.random()*num+1)
       let random=Math.floor(Math.random()*(jokes.length-1))
        console.log(random);
       let joke=document.getElementById('joke');
       joke.innerHTML=  jokes[random] 
})


//    console.log(jokes[random]);