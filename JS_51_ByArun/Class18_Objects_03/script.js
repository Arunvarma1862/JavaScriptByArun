const course={
    cousename:"js",
    price:"66",
    couresInstrucror:"virat"
}

// course.couresInstrucror

const {couresInstrucror:instru}=course
// console.log(couresInstrucror);
console.log(instru)



// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



























async function hello(){

    // let options={
    //     method:"Post",
    //     headers:{
    //         "Content-type":"application/json"
    //     },
    //     body:JSON.stringify(item)
    // }

    let p= await fetch('https://jsonplaceholder.typicode.com/posts');
    let bn= await p.json();   
    return bn;
}

async  function main(){

    // let item={
    //     email:"auditor@innovkyc.com",
    //     password:"Test2024"

    // }

    let a= await hello()
   console.log(a[0].title)

}
main()
