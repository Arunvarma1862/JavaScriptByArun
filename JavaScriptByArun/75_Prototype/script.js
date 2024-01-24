let a = {
  names2: "hello",
  2: "hii",
  run: () => {
    alert("self run");
  },
};
console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};
p.__proto__ = {
  names: "hiihhh",
};
a.__proto__ = p;

a.run();
console.log(a.names);
