const item=()=>{
    console.log("hello world")
}
item();

function items (){
console.log("hello")
}

items();

function met(name){
    console.log("hey " + name+" how are you");
    console.log("hey " + name+" how are you baby");
    console.log("hey " + name+" how are you babu");
    console.log("hey " + name+" how are you njs");
    console.log("hey " + name+" how are you nbjs");
}
met("viru");

const add=(a,b,c=5)=>{
    // console.log(a+b);
    return a+b+c;
}
result=add(5,3)
console.log("the sum of a and b is "+ result )