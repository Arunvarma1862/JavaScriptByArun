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


// const item=[14,52,63,"helloo", null, undefined]
// console.log(item)
// console.log(item[3])
// item[0]="51000";
// item[6]="63214";
// console.log(item)
// for(let i=0;i<item.length;i++){
//   console.log(item[i])
// }
// for(let key of item){
//    console.log(key)
// }

// let a=[4,5,5,6,9];
// console.log(a,typeof a);

// let b= a.toString();
// console.log(b,typeof b)

// let c=a.join("_");
//  console.log(c, typeof c);

//  let numm= [1,52,86,3];
//  let nuuuu=numm.pop();
//  console.log(numm, nuuuu)

//  let k1= [12,85,96,74,32];
//   let l1=k1.push(96);
//  console.log(k1,l1)

//  let k2=[12,85,96,74,32];
//  let l2=k2.shift();
//  console.log(k2,l2)

//  let k3=[12,85,96,74,32];
//  let l3=k2.unshift(53);
//  console.log(k3,l3)

//  let k4=[1,2,3,4,5,6];
//  delete k4[0];
//  console.log(k4);
// let a=[1,5,6,85,96,56];
// let b=[1,5,6,85,96,56];
// let c=[1,5,6,85,96,56];

// let d=a.concat(b,c);
// // console.log(d);
// // console.log(b)

// let compare =(a,b)=>{
//    return b-a;
// }

// let bl=[1,5,6,85,96,56];
// // bl.sort(compare);
// // console.log(bl)
// // bl.reverse();
// // console.log(bl);

// let lp=bl.splice(2,3,251,631,869,632,963);
// console.log(bl,lp);

// let lo=bl.slice(2,4);
// console.log(lo)


// let item=[4,52,96,36];
// for(i=0;i<item.length;i++){
//    console.log(item[i])
// }
// for(let key in item){
//    console.log(item[key]+ " "+key)
// }
// for(let key of item){
//    console.log(key)
// }
// item.forEach(element=>
//    {
//    console.log(element)
// }  )


// let item="helloo";
// console.log(item, typeof item)
 
// let items=Array.from(item);
// console.log(items, typeof items, item);


// let a=[52,63,96];
// a.forEach((value)=>{
//    console.log(value*value);
// })
// console.log(a)

// let p=a.map((value,index, array)=>{
//    console.log(value, index,array);
//    return value+1;
// })
// console.log(p)


// const item =(a,b)=>{
//    return a*b
// }
// console.log(item(5,3));

// let list=[63,86,96,2,6,5];
// let lo=list.filter((list)=>{
//    return list>10;
// })
// console.log(lo);
// let arr=[1,5,3,8,9];
// const red=(a,b)=>{
//     return a+b
// }
// console.log(arr.reduce(red))
// let newarr=arr.reduce((a,b)=>{
//    return a+b;
// })
// console.log(newarr);

//1

// let a=[41,63,85];
// let user=prompt("enter number");
//   user =Number.parseInt(user)

// a.push(user);
// console.log(a)

//2

// let a=[41,63,85];
// let user;


//  do{
//    user=prompt("enter number");
//    user =Number.parseInt(user);
//    a.push(user)
//   }
//   while(user!==0)
//   console.log(a);

//3

// let user=[50,32,96];
// let a= user.filter((user)=>{
//    return user%10==0;
// })
// console.log(a)

//4

// let user=[2,4,6];
//  let ne=user.map((a)=>{
//    return a*a;
// })
// console.log(ne)

//5
// let user =[1,3,5];
// let n=user.reduce((a,b)=>{
//    return a*b;
// })
// console.log(n)

// let GuessNumber;
// let random_number=Math.floor(Math.random() * 101);
// let score=0;
// console.log("random Number"+ random_number )
// while(GuessNumber!=random_number){

//    GuessNumber=prompt("Enter number");
//    // GuessNumber=  Number.parseInt(GuessNumber);

// if(random_number>GuessNumber){
//    console.log("number is greater ")
//    score++;
// }
// else if(random_number<GuessNumber){
//    console.log("number is lesser ")
//    score++;
// }
// else{
//    console.log("100 is crossing")
//    score++;
// }
// }
// console.log(`The score is ${100-score}`);

let obje={
   hap:56,
   jk:52,
   dks:63
}
console.log(typeof obje);

let a=[4,5,2,5,3];
console.log(typeof a)

console.log(obje, obje.hap, obje["hap"])
obje.oki=563;
obje.jk=6321;
console.log(obje)

