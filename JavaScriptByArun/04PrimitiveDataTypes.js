console.log("primitive data types   null number symbol string boolean bigint undefined");

let a = null;
let b=  16;
let c= "ArunBabu";
let d=  Symbol("this is symbol");
let e = true;
let f=  BigInt(16)+ BigInt(25);
let g=  undefined;
let h;    // undefined


console.log(a,b,c,d,e,f,g);

const items={

    name : "Arun",
    section : 1,
    isStudent : true,
    IsHero: true,
    IsVilian :false

}

// console.log(items['name']);
// items['name']= "Virat";    // replace  in object
// items["marks"]=65;         // add in object 
// console.log(items)


const item= {

    name : "Arun",
    phNo : 9685366542,
    MarksOfEnglish:50,
    MarksOfMaths:63
    
    
  }
  
    // console.log(item["phNo"])


    const obj={
      jdl:"hello",
      2:"hii",
      3:"hello",
      4:{
        23:"hjdbh"
      }
      ,
      func: function(){
         return this.jdl
      }
    }
    console.log(obj.func())


    const ites={

      a:"hekl",
      h:"dnc",
      gh:"nsd",
      mn:{
        nb:"jscn"
      },
      func:function(){
        return this.mn
      }

    }

    console.log(ites.func());
    console.log(ites.mn.nb)

    
   