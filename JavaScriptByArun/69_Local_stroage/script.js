let key=prompt("enter key")
let value=prompt('enter value')

localStorage.setItem(key,value);
console.log(`the value of ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'blue'){
    localStorage.removeItem(key)
}
if(key==0){
    localStorage.clear()
}

console.log(localStorage.length);
console.log(localStorage.key(1));

