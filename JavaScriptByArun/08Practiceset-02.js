
const prompt= require("prompt-sync")({sigint:true});
     //Q1
/*const a= prompt("Enter Number")
if(a>10 && a<20){
    console.log("Lies between 10 and 20",a)
}
else{
    console.log("Not lies between 10 and 20");
}*/

// Q2

/*const Teams="Aus";
switch(Teams){
    case "India":
        console.log("Rank1");
        break;
        case "Aus":
            console.log("Rank2");
            break;
            case "Eng":
                console.log("rank3");
                break;
                default:
                    console.log('Rank 10');
                    break;

}*/

// Q3

/*let num= 12;
if(num%2==0 && num%3==0){
    console.log("divisible by 2 and 3");

}
else {
    console.log("not divisible by 3")
}*/

//Q4

/*let num= prompt('enter number');
num =Number.parseInt(num);
if(num%2==0 || num%3==0){
    console.log("either divisible by 2 or 3");
}
else{
    console.log("neither divide 2 or 3")
}*/


// Q5

const numb= prompt("enter number");
console.log("you can ", numb>=18? "drive": "not drive");

const number = prompt("enter number")
   numbers = number>=18? "can drive": "cant drive";
//   numbers= Number.parseInt(numbers);
   console.log(typeof numbers)
   console.log(numbers);
  
   
