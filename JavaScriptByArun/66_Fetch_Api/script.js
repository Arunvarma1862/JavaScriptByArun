let p= fetch('https://jsonplaceholder.typicode.com/todos/1');

p.then((value)=>{
    console.log(value.status);
    console.log(value.ok);
    console.log(value.headers);
    return value.json()
}).then((value)=>{
    console.log(value);
    
})