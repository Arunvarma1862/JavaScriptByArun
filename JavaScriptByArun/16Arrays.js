console.log('Arrays - collection of items');

// Arrays are objects 

let marks_of_students = [95,85,42,65.2];
console.log(marks_of_students)
console.log(marks_of_students[2]);
console.log(marks_of_students[5]);

let items=[52,"hellooo", true, null, BigInt(5)];
console.log(items)
console.log(items[5]);  // undefined
console.log(items.length); // length of array
items[5]=85;         // add one more item
console.log(items[5]);  
items[0]= 98;      // changing the value
console.log(items);
items[10]=69;    // undefind 4  index of empty items
console.log(typeof items);
console.log(items);

for(let i=0; i<items.length;i++){
    console.log("items "+items[i]);
}


