let item ="Virat Babu";
let Name="Arun\"";


console.log(item.length);    // item.length is a property
console.log(Name.length);

console.log(item.toUpperCase());   // is a function 
console.log(item.toLowerCase());
console.log(item.slice(2,4));
console.log(item.slice(2));
console.log(item);

let per= "virat bhai";
 let p=per.replace("bhai", "babu")
 console.log(p);

 let friend ="Ram"
 console.log(per.concat(" is the friend of ",friend, "ok"));

 let r= "              name              ";
 console.log(r.trim());

 let person="Rashmika";
for(let i=0; i<person.length;i++){
  console.log(person[i]);
}

let person2="Arun"+"virat"+"jadge";
console.log(person2);

let person3="varun";
console.log(person3.replace("ar","kl"));
console.log(person3);
console.log(person3[4]);

 let a="Hello";
 let m= a.charAt(2);
 console.log(m);
 console.log(a[2]);

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() == str2.toUpperCase();
}
console.log(areEqualCaseInsensitive("i","I"))


