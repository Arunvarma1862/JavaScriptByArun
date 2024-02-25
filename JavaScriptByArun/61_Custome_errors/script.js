

// try{
//     throw new ReferenceError("harry")
    
// }
// catch(error){
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
    
    
    
// }

try{
    let age=prompt("enter age")
    age=Number.parseInt(age)
    if(age>150){
        throw new ReferenceError('harry')
    }
    console.log('hello')
}
catch(error){
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}
console.log('script is running');
 