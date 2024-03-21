
//destrucing1

const arr=[1,2,3,4,5];
// const a=arr[0];

//destrucing2

const [a,b,...rest]= arr;
console.log(a,b,rest)


//destrucing3

const obj={
    name:"virat",
    place:"delhi"
}

const {name, place, email="hello"}=obj;
console.log(email)


// spread m1

let nm=[1,2,3,4,5];
let bn= [...nm,12,322]
console.log(bn)


// spread m2

let nh={
    name:"hello",
    email:"hello@gmail.com"
}

let bg= {...nh, vb:"hjsk"};
console.log(bg);



// spread m3

let one=[1,2,3,4,5];
let two={
    n:"hjjs",
    h:"ndjs"
}

let three= [...one,{...two}]
console.log(three);

// spread m4
let a5=[
    {
        nm:"hj",
        mk:"bhhn"
    },
    {
        Hj:"jjk",
        bh:"nshh"
    }
]

let g=[...a5,{bn:"nskk"}]
console.log(g)
