let num=[1,2,3,4,5,6];
// delete
console.log(num, num.length, typeof num);
delete num[0];
console.log(num, num.length, typeof num);


// concat
let N1= [1,85,74,5,6,5];
let N2= [ 5,85,74,62,74];
let N3= [ 5,85,74,62,74,85];
console.log(N1.concat(N2,N3));
let newArray= N1.concat(N2,N3);
console.log(newArray);

// sort and compare (ascending and descending)

let compare=(a,b)=>{
    // return a-b;
    return b-a;
;}
let hj=[411,21,31,211,51,71,81];
console.log(hj.sort(compare));
console.log(hj.sort());

// reverse
console.log(hj.reverse());


// splice 
let numb=[41,25,41,62,42,85,52];
let deleteditems=numb.splice(2,3,1025,1026,1051,1024,5241);
console.log(numb);
console.log(deleteditems)

// slice

let number =[1,2,3,4,5,6,7,8,9];
let sli=number.slice(2,5);
console.log(sli);
 let slic=number.slice(2);
console.log(slic);
