//Q1
const prompt= require("prompt-sync")({sigint:true});
const obj={
    arun:65,
    virat:96,
    jadaeha:56
}
for( let i=0; i<Object.keys(obj).length;i++){
    
    // console.log("key "+ Object.keys(obj)[i]+ " is "+ obj[Object.keys(obj)[i]]);
}

// Q2

for(let key in obj){
    // console.log(key + " "+ obj[key]);
}

// Q3

let CN=5;
let i;
let Reach =0;


while(i!=CN){

    if(Reach>0 && Reach <=3){
        console.log('try again');
    }
    
     i= prompt("enter a number");
    
     if(Reach==3)
     {
        console.log("3 Attempts finished");
        break;
     }
     Reach++;
     
}
if(i==CN){
    console.log('you have entered right number');
}


// Q4

const mean= (p,q,k,l)=>{
    return (p,q,k,l)/4;
}

const nm=mean(4,5,8,9);
console.log(nm);
