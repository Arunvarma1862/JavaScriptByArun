document.body.hasAttribute("class")
console.log(document.body.children[0].firstElementChild.hasAttribute('class'));
console.log(document.body.children[0].firstElementChild.getAttribute('class'));
console.log(document.body.children[0].firstElementChild.setAttribute('id',"box11"));
console.log(document.body.children[0].lastElementChild.removeAttribute('class'));
console.log(document.body.children[0].attributes);

console.log(document.getElementById('box55').dataset);

console.log(document.getElementById('box55').dataset.game);

console.log(document.getElementById('box55').dataset.player);
