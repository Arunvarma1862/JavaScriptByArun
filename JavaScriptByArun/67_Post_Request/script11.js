async function createTODO(item){
   
    let options={
        method:"Post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(item)
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts',options);
    let response=  await  p.json();
    return response;

}


async function getTODO(id){
    let resp= await fetch('https://jsonplaceholder.typicode.com/todos/'+ id);
    return await resp.json()
}


const main=async ()=>{

    let todo={
        title: 'Harry',
        body: 'bar',
        userId: 1,
      }

    let a= await createTODO(todo)
    console.log(a);
    console.log(await getTODO(1));
    
    
}
main()