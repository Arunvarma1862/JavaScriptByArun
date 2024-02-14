
async function createTODO(item){

    let options={
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(item)
    }

    let p= await fetch('https://jsonplaceholder.typicode.com/posts',options);
    return await p.json()

}

const getTODO=async(id)=>{
    let resp= await fetch('https://jsonplaceholder.typicode.com/todos/'+ id);
    return await resp.json()
}


const main=async ()=>{

   let todo={
    title: 'Harry',
    body: 'bars',
    userId: 1,
    }

    let a=await createTODO(todo);
    console.log(a)
    console.log(await getTODO(1))

}

main()