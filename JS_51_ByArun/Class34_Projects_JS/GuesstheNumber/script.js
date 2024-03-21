let random=parseInt(Math.random()*100+1);
console.log(random)

const submit=document.querySelector("#subt");
const Reset=document.querySelector("#reset");
const userInput=document.querySelector("#guessField");
const previousGuess=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const loworHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");


const p = document.createElement('p')
const pg = document.createElement('p')
let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid number')
        userInput.value=''
        loworHi.innerHTML=''
        
    }
    else if(guess <1){
        alert('please enter more than 1')
        userInput.value=''
        loworHi.innerHTML=''
     
    }
    else if(guess >100){
        alert('please enter less than 100')
        userInput.value=''
        loworHi.innerHTML=''
      
    }
    else{
        prevGuess.push(guess)
        console.log(prevGuess)
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game over.Random number is ${random}`)
            endGame()
          
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage("You won the Game");
        endGame()
    }
    else if(guess < random){
        displayMessage('Number is To Low')
    }
    else if(guess > random){
        displayMessage('Number is Too high')
    }
}

function displayGuess(guess){
    userInput.value='';
    previousGuess.innerHTML +=`${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    loworHi.innerHTML=`<h2>${message}</h2>`
    

}


function endGame(){

    userInput.value='';
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML= `<h2 id="newGame" style="color:green">Start new Game</h2>`
    pg.classList.add('button2');
    pg.innerHTML= `<h2 id="newGame2">All previous guess list ${prevGuess}</h2>`
    startOver.appendChild(p);
    startOver.appendChild(pg);
    playGame=false;
    newGame()
    

}

function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click',function(e){
       random=parseInt(Math.random()*100+1);
       console.log(random)
       prevGuess=[]
       previousGuess.innerHTML=' '
       remaining.innerHTML = 10
       numGuess=1
       loworHi.innerHTML=" "
       userInput.removeAttribute('disabled', '')
       submit.removeAttribute('disabled', '')
       startOver.removeChild(p)
       startOver.removeChild(pg)
       playGame=true;
   })
}

Reset.addEventListener('click',function(){
    prevGuess=[]
    previousGuess.innerHTML=' '
    remaining.innerHTML = 10
    loworHi.innerHTML=" "
   
})


