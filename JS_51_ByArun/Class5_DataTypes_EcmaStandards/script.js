"use strict"   // traet all js code as newer version

// alert(3+3)    // we are using nodejs ,not in browser


let a="hello";
let b= 12;    // 2 power of 53
let c= null  // standlone value  type of null is object
let d= BigInt(125); 
let e= Symbol  //   unique 
let f= undefined;
let g= true;

console.table([a,b,c,d,e,f,g])
console.log(typeof null)


let ite={
    one:"hello",
    func:function(){
        return this.one
    }
    
}
console.log(ite.func())