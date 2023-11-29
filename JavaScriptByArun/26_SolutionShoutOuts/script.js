//const prompt= require("prompt-sync")({sigint:true});
// const prompt= require("prompt-sync")({sigint:true});

let randomnumber = Math.floor(Math.random() * 101);

let score=100;
let userInput;
console.log(randomnumber)
document.write(randomnumber)

while(true){
     userInput=prompt("enter a number");
    if(userInput<randomnumber){
        console.log("number is greater ");
        score--;
        alert("number is greater")
    }
    if(userInput>randomnumber){
        console.log("number is smaller");
        score--;
        alert("number is smaller")
    }
    // if(userInput<100){
    //     console.log("number is greater than 100");
        
    // }
    if(userInput==randomnumber){
        console.log("enter right number");
        console.log(`your score is ${score}`);
        
        document.write("\n"+score)
        break;
    }
}