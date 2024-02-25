async function createTODO(item){

    let options={
        "method":"post",
        "headers":{
            "Content-type":"application/json"
        },
        body:JSON.stringify(item)
    }

    let p= await fetch("https://jsonplaceholder.typicode.com/posts",options);
    let response= await p.json()
    return response;
}

async function getTODO(id){
    let p= await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
    let response2= await p.json()
    return response2
}

const main=async ()=>{

    let todo={
        title: 'Harry',
        body: 'bars',
        userId: 1,
    }

    let a= await createTODO(todo);
    console.log(a);
    let b= await getTODO(5);
    console.log(b)

}
main()