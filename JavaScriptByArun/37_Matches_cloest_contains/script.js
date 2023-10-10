let id=document.getElementById("id1");
let sp=document.getElementById("sp1")

console.log(id);
console.log(sp)

console.log(id.matches(".class"));
console.log(id.matches(".box"));

console.log(sp.closest(".box"))
console.log(sp.closest("#sp1"));


console.log(id.contains(sp));
console.log(sp.contains(id));
console.log(sp.contains(sp))
