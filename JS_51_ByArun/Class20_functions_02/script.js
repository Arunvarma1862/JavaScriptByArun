function user(val1,val2,...num1){
    return num1;

}

console.log(user(200,5000,20000,666,333,3666));


const item={
    username:"hello",
    price:5633
}

function hello(anyobject){
    return ` ${anyobject.username}  and the price is ${anyobject.price}`
}

console.log(hello(item));


const array=[200,550,666,333];
function newArr(getarray){
      return getarray[2]
}


console.log(newArr(array))







function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));