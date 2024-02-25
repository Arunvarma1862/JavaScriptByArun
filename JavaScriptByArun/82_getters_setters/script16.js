const hello={
   get name (){
    console.log('getting')
    return this._name  +" dbjnsjnksa"
   },
   set names(n){
    console.log("setting" + n)
      this._name=n.toUpperCase()
   }
}

hello.names="basj"

console.log(hello.name)

// const hello={
//     name:"virat"
// }

// hello.name="hkjabj";
// console.log(hello.name)
