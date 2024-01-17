function hello(){




try{
    let a=0;
    // console.log(program);
    console.log('program');
    return  "hello"
    
}
catch(error){
    console.log(error.message);
    
}

finally{
    console.log("final");
    
}
}
let a=hello()
console.log(a);
