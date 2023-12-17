console.log("Arun is a developer")
console.log('Arun is also Tester')

setTimeout(() => {
    console.log("settimout")
}, 3000);
setTimeout(() => {
    console.log("settimout2")
}, 3000);
console.log("the end")

const fn=() => {
  console.log("Nothing")
}


const callback=(arg,fn) => {
  console.log(arg)
//   alert('sure')
    fn();
}
const loadscript=(src, callback) => {

    let sc= document.createElement('script');
    sc.src=src;
    sc.onload= callback("harry",fn)
    document.head.append(sc)
    
}

loadscript("https://www.youtube.com", callback)


