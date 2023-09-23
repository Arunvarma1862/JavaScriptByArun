const prompt= require("prompt-sync")({sigint:true});

console.log("Conditional statements");
let a= prompt("what your age? ");
console.log(typeof a);
a= Number.parseInt(a)
console.log(typeof a);

if(a<=0){
    console.log("Inavalid age your entered");
}

else if (a<9){
    console.log("you cannot drive");

}
else if (a>=9 && a<18){
    console.log("you have to think to drive");

}
else {
    console.log("can drive ");
}

let browser= "edge";

switch(browser){
     case 'chrome':
     console.log('eccute chrome');
     break;

      case 'edge':
     console.log('eccute edge');
     break;
     case 'firefox':
     console.log('eccute firefox');
     break;

     default:
    
     console.log('eccute ');
     break;

}


// Ternary operator

let number= 52;
console.log("you ", number>=18? "can drive": "cant drive");

/*console.log("conditional expressions")
let a= prompt("what's your Age")
a=Number.parseInt(a)
console.log(typeof a)
if(a<0){
  alert("this is an invalid age")
}
  else if (a<9) {
    alert("your  cannot drive ")
  }
    else if(a<=18  && a>=9){
      alert("your  can think for drive")
    }
else{
  alert("You can drive")
}

// Ternary operator
console.log("you are ", a>18? "Hero":"NotHero")

// switch statement

const priceOdFruits= "Apple";

switch(priceOdFruits)
{
    case 'papaya':
    console.log("Rs5");
    break;

  case 'Mango':
  case 'Apple':
    console.log("Rs50");
    break;
  case 'pomegrate':
    console.log("Rs56");
    break;
  default:
    console.log("RS256");
}*/

let a = prompt("what yoour age");
a= Number.parseInt(a);
console.log(typeof a)

if(a<0){
  alert("this is invalid age")
}
else if (a<9){
  alert("you are kid")
}
else if (a<18 && a>=9){
  alert("you are stil Minor")
}
else{
  alert("you are Major")
}
console.log("you are ", a>=18 ? "Major": "Minor")

const items="Hii";
switch(items){
  case 'hello':
    console.log("yaaa");
    break;

  case 'hii':
    console.log('haaa');
    break;

    default :
    console.log('kssa');
    break;
}
  


