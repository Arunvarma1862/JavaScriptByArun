// Q1

let person="harr\'";
console.log(person.length);

// Q2
  let sentence= "A quick and lazy fox jumps over the dog";
  let word ='fox';
  console.log(`the word ${word} ${sentence.includes(word)? "is their": "not their"}` );
  console.log(word.startsWith("f"));
  console.log(word.endsWith("x"));

  // Q3

  let hello="HIIIIIIIII";
  console.log(hello.toLowerCase());

  // Q4

   let sen="please give Rs1000";
//    sen =Number.parseInt(sen.slice("please give Rs".length));
   sen =Number.parseInt(sen.slice(14));
   console.log(sen);

   // Q5

   let po="Arunbabu";
   console.log(po);
   po[4]= "H";
   console.log(po);
    k= po.replace("A","h");
   console.log(k);



