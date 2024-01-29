const hello=(name,greeting)=>{
    console.log(greeting+' hello '+ name)
}
hello("harru","afternoon")

let x={
    name:"ganesh",
    exp:30,
    des:"dev",
    
    show :function(){
        // console.log(this);
        // let that=this;
        // setTimeout(function()  {
        //     console.log(`My Name is ${that.name}\n the role is ${that.des}`)
        // }, 2000);
      
        setTimeout(() =>{
            console.log(`My Name is ${this.name}\n the role is ${this.des}`)
        }, 2000);
        
    }
}
// console.log(x.name, x.exp)
x.show()
 