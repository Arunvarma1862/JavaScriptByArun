// let a=[1,2,3,4,5];
// let a="hello World"

// for of iterable for array, string , map and not for objects
let a={
    1:"hello",
    2:"hiii"
}
for (const value in a) {
    console.log(a[value])
}

let map= new Map();
map.set('a',1)
map.set('b',2)
map.set('c',2)
console.log(map)

for (const [key,value] of map) {
    console.log(key, value)
}

// fo in - array, objects,strings and not for map 

let an="hello";
for (const key in an) {
 console.log(an[key])
}


let arr=["cb","hjdchsb"];
arr.forEach((value,index,array)=>{
    console.log(value,index,array)
})


let ghj= [
    {
        name:"virat",
        player:"batsman"
    },
    {
        name:"virat18",
        player:"batsman"
    },
    {
        name:"virat25",
        player:"batsman"
    },

]

ghj.forEach((item,index)=>{
    console.log(item.name)
})