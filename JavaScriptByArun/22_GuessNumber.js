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

let rdmNumber = Math.floor(Math.random() * 101)
let score = 100
while (true) {
let usrInput = prompt("Guess the number betwenn 1 to 100 : ")
if (usrInput > rdmNumber) {
  console.log("Your guess is greater than the correct number!")
  score--
}
if (usrInput < rdmNumber) {
  console.log("Your guess is smaller than the correct number!")
  score--
}
if (usrInput < 100) {
  console.log("You have to guess numbers between 1 and 100!")
}
if (usrInput == rdmNumber) {
  console.log("You have guess the correct number!")
  console.log("Your score is " + score)
  break
}
}