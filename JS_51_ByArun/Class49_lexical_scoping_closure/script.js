function hello(){
    let a=0;
    function add(){
        return a++;
    }
    return add
}
let result = hello();
console.log(result())
console.log(result())
console.log(result())
let a=5;
console.log(result())
console.log(result())
