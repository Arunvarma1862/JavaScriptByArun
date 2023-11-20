// const item ={
//     names:"Hello",
//     price:56,
//     indian:true,
//     char:null
//     // nnssbbu
// }
// console.log(item["names"])
// console.log(item.price)

// let a="Hello World"
// console.log(typeof a)
// console.log(a+15)

const prompt= require("prompt-sync")({sigint:true});

// let b= prompt("hello, what your age?");
// console.log(typeof b);
//  b=Number.parseInt(b);
//  console.log(typeof b)
//  if(b>0){
//     alert("this is valid age")
//  }
// let sum=0;
// let n=prompt("Enter the value");
// n=Number.parseInt(n);

// for(let i=0;i<n;i++){
//    sum += (i+1);
// }
// console.log(sum)

// const item={
//    harry:96,
//    arun:86,
//    viru:63
// }
// for(let a in item){
//    console.log(a + item[a])
// }

// for(let b of "viru"){
//    console.log(b)
// }

// let n= prompt("Enter the value");
// n= Number.parseInt(n);
// let i=0;
// while(i<n){
//    console.log(i);
//    i++;
// }

// let n= prompt("Enter the value");
// n= Number.parseInt(n);
// let i=0;
// do{
//    console.log(i);
//    i++;
// }
// while(i<n)

// const heloo=(a,b)=>{
//    console.log("hello world");
//    // return "hiii";
//    return a+b;
  
// }

// console.log(heloo(5,3))

const obj={
   harry:96,
   Arun:96,
   viru:63,
   sehwag:29
}

// for(let i=0;i<Object.keys(obj).length;i++){
//    console.log(Object.keys(obj)[i]+ obj[Object.keys(obj)[i]])
// }

// for(let a in obj){
//    console.log(a + obj[a])
// }

// let cn=5;
// let user;
// while(cn!=user){
//    user=prompt("enter a number");
//    console.log("Try again")
// }
// console.log("Right number")


// const mean=(a,b,c,d)=>{
//    return a+b+c+d/4;
// }

// console.log(mean(1,2,5,8))


// const name="peter";
// console.log(name)
// console.log(name.toLowerCase());


// const names="har\"";
// const nam1= "    jksdfjsd     "
// const per ="viru sehwag";
// console.log(names)
// console.log(names.length)
// console.log(names.concat(" is the friend of friend"))
// console.log(names.slice(1,2));
// console.log(names.slice(2));
// console.log(names.replace("h","p"))
// console.log(nam1.trim())
// console.log(nam1.trimStart())
// console.log(nam1.trimEnd())
// console.log(names.toLowerCase())
// console.log(names.toUpperCase())
// console.log(names.includes("h"));
// const sentence="The brown fox jumps over the lazy dog ";
// const word="fox";
// console.log(`the word ${word} ${sentence.includes(word) ? "is": "is not"} in the sentence`);
// console.log(`the word ${word} ${sentence.endsWith(word) ? "is":"is not "} in the sentence`)
// console.log(`the word ${word} ${sentence.startsWith(word) ? "is":"is not "} in the sentence`)
// console.log(names.toUpperCase());
// const money="please give amount Rs1000";
// let final=money.slice("please give amount Rs".length);
// final =Number.parseInt(final);
// console.log(typeof money);
// console.log(typeof final)
// console.log(money.slice(19))

// let friend = "sehwag";
// friend[4]="l";
// console.log(friend)

// const item={
//    hello:52,
//    hii:63,
//    klp:96,
//    hjo:85
// }
// console.log(item.hello)
// console.log(item['hii'])
// console.log(item)
// item['hii']=98;
// console.log(item)
const item=[14,52,63,"helloo", null, undefined]
console.log(item)
console.log(item[3])
for(let i=0;i<item.length;i++){
  console.log(item[i])
}
for(let key of item){
   console.log(key)
}