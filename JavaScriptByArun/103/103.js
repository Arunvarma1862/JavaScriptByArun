
// const prompt= require('prompt-sync')({sigint:true});
console.log('Hello World');


//  function main(a,b){
//     return a+b
//  }
//  let c= main(1,668)
//  console.log(c);
//  alert("hello");

//  let a= prompt("Enter Number")
//  console.log(a);
 
//   let b=  parseInt(a);
//   console.log(b);
// console.clear()
// console.log('log');
// console.info('info')
// console.warn("warn");
// console.error("error")
// console.assert("err" !=false)
// console.assert("err" ==false)

// console.time("Loop")
 
// for(let a=1;a<=10;a++){
//    console.log(966);
   
// }
// console.timeEnd("Loop")
  
// console.time("Loop2")
// let a=1
// while(a<=10){
//    console.log(566)
//    a++;
// }
 

// console.timeEnd("Loop2")
  
 // Guess the number

//  let ran =Math.floor(Math.random()*100);
//  console.log(ran);
//  let chances =0;

//  while(true){
   
//   let input=  prompt("Enter guess number");

// //   console.log(typeof input);
  
//       input= parseInt(input);
//       // console.log(typeof input);

//    if (ran==input){
//       console.log("the correct guess number is " , ran);
//       alert("the correct guess number is " , (ran) ,(typeof ran));
//       document.write("the correct guess number is " , ran)
//       chances++;
//       break;
//    }
//   else if(ran<=input){
//    console.log('number is lesser');
//    alert("Number is lesser")
//    chances++;
//  }
//  else if( ran>=input){
//    console.log('number is greater');
//    alert('number is greater')
//    chances++;
//  }
 

// }
// console.log(`The guess number is , ${ran}, score is  ${100-chances}`);

// alert("enter a value");
// let a= prompt('Enter number', "99999")
// a=parseInt(a)
// alert("the type of " + (typeof a))
// let write=confirm("do you want to write");
// if(write){
//    document.write(a);
// }
// else{
//    document.write("please allow to write")
// }


// let a=52;
// let k="Harry"
// let l=null;
// let o=undefined;
// let p=true;
// let u=false;
// let m=BigInt(85)+BigInt(53)
// let g=Symbol("I am a symbol");

// let obh={
//    a:52,
//    b:63
// }
// console.log(obh['a']);
// console.log(obh);
// console.log(obh.b);
// obh.b=9999;
// console.log(obh);
// obh.c=5566663;
// console.log(obh);
// console.log(a,k,l,o,p,u,m,g);


// Faulty calculater 
// let random = Math.random();
// console.log(random);
// let prompt= require('prompt-sync')({sigint:true});


// let a= prompt("enter number1 ");
// let b= prompt("enter number2 ");
// let c= prompt("enter operation ")
// let obj={
//    "+":"-",
//    "/":"-",
//    "*":"-"
// }

// if(random<0.1){
//    // alert(`the sum of ${eval(`${a} ${c} ${b}`)}`)
//    console.log(`the sum of ${eval(`${a} ${c} ${b}`)}`);
   
// }
// else{
//    c=obj[c]

//    //  alert(`the sum of ${eval(`${a} ${c} ${b}`)}`)
//    console.log(`the sum of ${eval(`${a} ${c} ${b}`)}`);
// }


// console.log(window);
// console.log(document);


// let obj1={
//    1:"viru",
//    2:"kohli",
//    3:"virat"
// }
// let obj2={
//    1:"google",
//    2:"capgemini",
//    3:"inno"
// }
// let obj3={
//    1:"hello",
//    2:"bye",
//    3:"hii"
// }

// let ran1=Math.floor(Math.random()*3)+1
// let ran2=Math.floor(Math.random()*3)+1
// let ran3=Math.floor(Math.random()*3)+1

// console.log(obj1[ran1]+" "+obj2[ran2]+" "+obj3[ran3]);


// let a ="hello";
// console.log(typeof(a+52));

// const obj={
//    1:"hello",
//    2:"djbjs",
//    3:"jdaj",
//    dsbhbdh:"dcb"
// }

// // obj=56    Assignment to constant variable.

// obj[1]=4988;
// obj[4]=6696
// console.log(obj);
// console.log(obj.dsbhbdh);


// let age=21;
// console.log(`you  ${age>=18?"can drive":"cant drive"}`);


// let a=122;
// let b=12;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a**b);
// console.log(a%b);
// console.log(a++);
// console.log(a--);
// console.log(++b);
// console.log(--b);


// let sum=1;

// let array=[1,5,6,9];
// for (let index = 0; index < array.length; index++) {
//    sum+= array[index]
   
// }
// console.log(sum)


// const prompt= require('prompt-sync')({sigint:true});
//1
// let user=prompt("enter input age");
// user=Number.parseInt(user);
// alert(user>=18?"can drive":"cant drive");

//1

//  let age=prompt('enter age');
//  age= Number.parseInt(age)

//  const candrive=(age)=>{
//      return age>=18?true:false;
//  }

//  if(candrive(age)){
//    alert('can drive')
//  }
//  else{
//    alert('cant drive')
//  }

//2

 

//  let runAgain=true;
//  const candrive=(age)=>{
//    return age>=18?true:false;
// }
//  while(runAgain){
//    let age=prompt('enter age');
//     age= Number.parseInt(age);

//     if(age<0){
//       console.error('please enter a valid age')
//       break;
//     }
 
//   if(candrive(age)){
//     alert('can drive')
//   }
//   else{
//     alert('cant drive')
//   }
//   runAgain=confirm("do you want play again");

//  }

 


// let user=confirm("see prompt")

// if(user){
   
//    let user=prompt("enter input age");
//    user=Number.parseInt(user);
//    alert(user>=18?"can drive":"cant drive");
// }
// else{
//    console.log('No need');
   
// }

//4

// let number=prompt("enter number");
// number= Number.parseInt(number);

// if(number>4){
//    location.href="https://www.youtube.com"
// }

//5

// let color=prompt("enter color")
// document.body.style.backgroundColor=color


// let runAgain=true;
// const candrive=(age)=>{
//     return age>=18?true:false
// }
// while(runAgain){
//     let age=prompt("enter age");
//     age=Number.parseInt(age)
//     if(age<0){
//         console.error('please enter valid age')
//         break;
//     }
//     if(age>=18){
//         alert("you can drive")
//     }
//     else{
//         alert('cant drive')
//     }
//     runAgain=confirm("do you want play again");
// }



// let color=prompt("enter color")
// document.body.style.backgroundColor=color;



// let number = prompt("Enter number")
// number = Number.parseInt(number);

// if(number<4){
//     location.href="https://www.youtube.com"
// }


// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// let arr= Array.from(document.body.childNodes)
// console.log(arr);

// console.log(document.body.firstElementChild);
// let a= document.body.firstElementChild;
// console.log(a.parentNode);
// console.log(a.parentElement);
// console.log(a.firstElementChild.nextElementSibling);


// let t= document.body.firstElementChild.firstElementChild;
// console.log(t)
// console.log(t.rows);
// console.log(t.caption);
// console.log(t.tHead);
// console.log(t.tBodies);
// console.log(t.tFoot);

// console.log(t.tBodies[0].rows);
// console.log(t.rows[1].cells);
// console.log(t.rows[1].sectionRowIndex);
// console.log(t.rows[1].cells[2].cellIndex);


// let a=true;
// let b=true;
// let c=true;

// if(a){
//     console.log('a');
    
// }
// if(b){
//     console.log('b');
    
// }
// else if(c){
//     console.log('j')
// }
// else{
//     console.log('l');
    
// }

// let day="monday";
// switch (day) {
//     case "monday":
//         console.log('Hello');
        
//         break;

//     default:
//         console.log('Hii');
        
//         break;
// }
// const prompt=require('prompt-sync')({sigint:true});


// let age=prompt('enter age');
// age=Number.parseInt(age)

// if(age<0){
//     console.log('not valid age');
    
// }
// else if(age<9){
//     console.log('kid');
    
// }else if(age>=9 && age<18){
//     console.log('minor');
    
// }
// else{
//     console.log('drive');
    
// }

// let user=prompt("enter age")
// if(user>10 && user<20){
//     console.log('lies between 10and 20');
    
// }
// let Team="kd"
// switch(Team){

//     case "Ind":
//         console.log('virat');
//         break;

//         case "Aus":
//          case "Eng":
//             console.log('bell');
//            break;
           
//      default:
        
//      console.log('watson');
     
// }

// let number=prompt("enter number");

// number=Number.parseInt(number)

// if(number%2==0 && number%3==0){
//     console.log('divisible 2 and 3');
    
// }
// else if(number%2==0 || number%3==0){
//     console.log('either divisible 2 and 3');
    
// }

// let age=12;
// console.log(` you can ${age>=18?'drive':'can\'t drive'}`);


// let a=document.querySelectorAll('.box');  // gives nodelist
// console.log(a);

// a.forEach(i => {
    
//     i.style.backgroundColor='yellow'
    
// });

// let g=document.getElementById('box3')

// g.style.color="blue";

// let k=document.getElementsByClassName('box');  // gives Html collection
// console.log(k);

//   k=  Array.from(k)

//   k.forEach(i=>{
//     i.style.color='white'
//   })


// let k=document.querySelector('.box4');
// k.style.backgroundColor="blue"

// document.querySelector('.box2').querySelector('.p').style.backgroundColor='blue'
// console.log(document.querySelector('.box2').getElementsByTagName('p'));

// let n=document.getElementById('box3')
// let o=document.getElementsByClassName('box2')[0];
// let e= document.getElementsByClassName('p')[0]
// console.log(n.matches('.box'));
// console.log(n.closest('.conatiner'));
// console.log(o.contains(e));
// console.log(e.contains(o));


// for (let index = 0; index <=100; index++) {
//     // const element = array[index];
//     // console.log(index);
    
    
// }

// let arr=[1,2,3,4];

// arr.forEach(i=>{
//     // console.log(i);
    
// })

// let obj={
//     1:"hello",
//     2:"hii",
//     3:"dnjcds"
// }

// for (const key in obj) {
//     // console.log(key+" "+obj[key]);
    
// }

// for (const iterator of arr) {
//     // console.log(iterator);
    
// }

// let sum=0;
// let n=3;
// for(let i=0;i<n;i++){
//     // sum+=(i+1);
//     sum= sum+(i+1)
// }

// console.log(sum);

// let i=1;
// while(i<10){
//     // console.log(i);
//     i++;
// }

// let a=10;
// do{
//     console.log(a);
//     a++;

    
// }while(a<10)

// let a=document.body.getElementsByTagName('li')
// //  a=  Array.from(a)
//  console.log(a);
 
//  a[0].style.color='red'

// document.body.getElementsByTagName('nav')[0].firstElementChild[0].firstElementChild.style.color='red';

// let a=document.body.getElementsByTagName('li');
// console.log(a);
// a=Array.from(a)

// a.forEach(i => {
//     i.style.backgroundColor='cyan'
// });

// const prompt=require('prompt-sync')({sigint:true});

// let user=prompt("Enter word");
// let Cpu=Math.floor(Math.random()*3+1);
// let obj={
//     1:"s",
//     2:"s",
//     3:"g"
// }
// let obj2=["s","w","g"][Cpu];
// console.log("obj2"+obj2);

// // console.log( "cpu"+obj[Cpu]);
// // console.log( "user"+user);

// const match=(cpu,user)=>{

//     if(cpu===user){
//         return "Nobody,Match is tied";
//     }
//     else if(cpu==="s" && user==="w")
//      return  "cpu";

//      else if(cpu==="w" && user==="s")
//      return  "user";

//      else if(cpu==="w" && user==="g")
//      return  "cpu";

//      else if(cpu==="g" && user==="w")
//      return  "user";

//      else if(cpu==="g" && user==="s")
//      return  "cpu";

//      else if(cpu==="s" && user==="g")
//      return  "user";
// }
// let a=match(obj[Cpu],user)
// // console.log(a);
// console.log( "cpu "+obj[Cpu]);
// console.log( "user "+user);
// console.log("the winner is "+ a);
// alert('winner is '+ a);
// document.write(`cpu:${obj[Cpu]} <br> user:${user} <br> the result is ${a}`)



const jokes = [
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why was the math book sad? Because it had too many problems!",
  "Why did the chicken cross the playground? To get to the other slide!",
  "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the computer go to the doctor? Because it had a virus!",
  "Why don't eggs tell jokes? Because they'd crack each other up!"
];
let num=jokes.length
console.log(num);

// let random=Math.floor(Math.random()*num+1)
let random=Math.floor(Math.random()*(jokes.length-1))
console.log(random);

 console.log(jokes[random]);
 let a="virat"
 console.log(a[0]);
 console.log(a[1]);
 console.log(a.length);

 let age=18;
 console.log(`the result\"s is \n ${age>=18?'drive':'not drive'}`);
 
 
 
 
  





























 
 
 
 
