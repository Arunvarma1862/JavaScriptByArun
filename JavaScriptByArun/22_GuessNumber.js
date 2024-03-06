const prompt= require("prompt-sync")({sigint:true});

let random =Math.floor(Math.random()*101);
// console.log(random);
let chances=0;
let input;
console.log(input)
while(input!=random){
 input=Number.parseInt(prompt("enter number"));
 
 if(input!=random){
    console.log("Wrong number try again");
 }
  if(random>input){
    console.log("the number is greater than "+input);
 }
else  if(random<input){
    console.log("the number is lesser  than  "+input);
 }
 chances++;
}
console.log(chances);
console.log(` your scored points is   ${100-chances}  `);
console.log("your scored points is "+  (100 -chances));

// let rdmNumber = Math.floor(Math.random() * 101)
// let score = 100
// while (true) {
// let usrInput = prompt("Guess the number betwenn 1 to 100 : ")
// if (usrInput > rdmNumber) {
//   console.log("Your guess is greater than the correct number!")
//   score--
// }
// if (usrInput < rdmNumber) {
//   console.log("Your guess is smaller than the correct number!")
//   score--
// }
// if (usrInput < 100) {
//   console.log("You have to guess numbers between 1 and 100!")
// }
// if (usrInput == rdmNumber) {
//   console.log("You have guess the correct number!")
//   console.log("Your score is " + score)
//   break
// }
// }


const ran= Math.floor(Math.random()*101);
let user;
let score=0;
console.log(ran);
console.log(user)
while(ran!=user){
   user= prompt("Enter a number");

 if(ran>user){
  console.log("ran is greater than user");
}
else if(ran<user){
   console.log("ran is lesser than user");
  
}
 if(user>100 || user <0){
  console.log("guess the number between 1 to 100")
}
score++;
}
console.log("Guesss was right");
console.log(`the score is ${100-score}`)