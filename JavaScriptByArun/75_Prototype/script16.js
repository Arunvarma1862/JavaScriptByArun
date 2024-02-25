let a={
    names2:"hello",
    2:"hii",
    run:()=>{
        alert('run')
    }
}

let p={
    run:()=>{
        alert('selfRun')
    }
}

 p.__proto__={
    names:"hiiiii"

 }
a.__proto__=p

a.run()
console.log(a.names)