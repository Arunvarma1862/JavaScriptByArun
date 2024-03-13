let a= Date();
console.log(a)

let b= new Date();
console.log(b)
console.log(b.getDate())
console.log(b.toString())
console.log(b.toDateString());
console.log(b.toLocaleDateString());

console.log(typeof b);;
// const date= new Date(2023,0,23);
// const date= new Date(2023,0,23,5,2);
const date= new Date("01-04-2023");
console.log(date.toLocaleDateString())



let TimeStamp= Date.now();
console.log(TimeStamp)
console.log(date.getTime())
console.log(date.getSeconds())
console.log(Math.floor(Date.now()/1000))












// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})