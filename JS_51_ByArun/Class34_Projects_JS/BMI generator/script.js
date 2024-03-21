const form= document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
  const height=  parseInt(document.querySelector('#height').value)
  const weight=  parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results');
  const text= document.querySelector('#text')
  let bmi;
  if(height ==="" || height < 0 || isNaN(height)){
    results.innerHTML=`Please give valid height ${height}`
  }
  else if(weight ==="" || weight < 0 || isNaN(weight)){
    results.innerHTML=`Please give valid weight ${weight}`
  }
  else{
     bmi= (weight/(height*height/10000)).toFixed(2)
     results.innerHTML=`<span>${bmi}</span>`
  }
setTimeout(() => {

  if(bmi <18.6){
    text.innerHTML= `UnderWeight `
    text.style.color="yellow"
 }
  else if(bmi >18.6 &&  bmi< 24.9){
  text.innerHTML= `NormalWeight `
  text.style.color="green"
 }
  else if(bmi>24.9){
  text.innerHTML= `OverWeight`
  text.style.color="red"
  }

    }, 2000);
  
    
})