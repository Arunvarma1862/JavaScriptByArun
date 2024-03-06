// Type=1
function greet(){
    console.log('hello');
}

// Type=2
  const hello =()=>{
    console.log('ArunBabu');
  }

  // Type=3

  const hii=()=>{
    return "hiiii";
  }

  // Type=4
    const oneplusaverge =(a,b)=>{
        console.log('solution');
        // return 1+ (a+b)/2;
        return Math.round(1+(a+b)/2);
    }
 
// Type =5
  const sum =(p,q)=>{
    return p+q
;  }

// TYpe =6

const mul=(p,q)=>
{
    let m = p*q;
    return m;
}

greet();
hello();
let a=hii();
console.log(a)

const b=1;
const c=2;
const l=3;

console.log("average"+ oneplusaverge(b,c) )
console.log("average"+ oneplusaverge(l,c) )
console.log("average"+ oneplusaverge(l,b))

let bn= sum(5,6);
console.log(bn);

let mm=mul(5,9);
console.log(mm);

// Type-1
function message(){
    console.log("hello")
  }
  // Type-2
  const hello=()=>{
    console.log("ArunG")
  }
  // Type-3
  const hii= ()=>{
    return "hii";
  }
  //Type-4
  function onplusAverage(x,y){
    console.log("Solution");
    return 1 + (x+y)/2;
    // return Math.round(1+(x+y)/2);
  }
  
  // Type-5
  const sum= (p,q)=>{
    return p+q;
  }
  // Type-6
  
  const mul=(a,b)=>{
    let M= a*b;
     return M;
  }
  
  let a=1;
  let b=2;
  let c=3;
  
  let h=mul(5,5);
  console.log(h)
  let HIIII=hii();
  console.log(HIIII);
  message();
  hello();
  console.log("one plus Average of the numbers ",onplusAverage(a,b));
  console.log("one plus Average of the numbers ",onplusAverage(b,c));
  console.log("one plus Average of the numbers ",onplusAverage(c,a));
  console.log(sum(5,6));


  let ab= function(){
    console.log('hii')
  }

  ab()
  