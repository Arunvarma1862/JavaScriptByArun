document.body.children[0].classList.add('he');
document.body.children[0].classList.add('hiii');
document.body.children[0].classList.remove('hellooo');

document.body.children[0].firstElementChild.className='dark'

document.body.getElementsByClassName('bye')[0].classList.toggle('box3')
document.body.getElementsByClassName('bye')[0].classList.toggle('box3');

console.log(document.body.children[0].firstElementChild.classList.contains('box'));


let div= document.createElement('div');
div.className="virat"
div.innerHTML="Batsman"
document.body.children[0].insertAdjacentElement('beforeend',div);

document.body.children[0].lastElementChild.className='rohit jadega'
document.body.children[0].lastElementChild.classList='rohitjadega';

document.getElementsByClassName('box2')[0].setAttribute('class','box box2')