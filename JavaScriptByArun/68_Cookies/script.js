console.log(document.cookie);
document.cookie='user=hello';
document.cookie='password=123sdnndsns';
let key=prompt("enter key ")
let value=prompt("enter value");
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
