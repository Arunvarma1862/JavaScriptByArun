

// Using then Method concept


// let options={
//     method:"Post",
//     headers:{
//         "Content-type":"application/json"
//     },
//     body:JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
// }


// let p=fetch('https://jsonplaceholder.typicode.com/posts',options);
// p.then((response)=>{
//     return response.json()
// }).then((json)=>{
//     console.log(json);
    
// })


// using async/await

async function createTODO(item){

    let options={
        method:"Post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(item)
    }

      let p = await fetch("https://jsonplaceholder.typicode.com/posts",options)
      let response= await p.json();
      return response;
    
    
}

const getTODO=async (id)=>{
    let p=  await fetch('https://jsonplaceholder.typicode.com/todos/'+ id);
    return await p.json()
}


const main= async ()=>{
   let todo={
    title: 'Harry',
    body: 'bar',
    userId: 1,
  }
   let json1= await createTODO(todo)
   console.log(json1);
   let json2=  await getTODO(5);
   console.log(json2);

}
main()