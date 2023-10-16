let user =prompt("Enter S, W and G");

let cpuI= Math.floor(Math.random()*3);
let cpu= ["S","W","G"][cpuI]
// console.log(cpu)

const match =(cpu,user)=>{
    if(cpu === user){
        alert("Match Ties, Please Try Again")
        
    }
    else if(cpu ==="S" && user === "G"){
        return "user";
    }
    else if(cpu==="G" && user==="S"){
        return "cpu";
    }
    else if(cpu==="W" && user==="G"){
        return "cpu";
    }
    else if(cpu==="G" && user==="W"){
        return "user";
    }
    else if(cpu==="S" && user==="W"){
        return "cpu";
    } 
    else if(cpu==="W" && user==="S"){
        return "user";
    }
    else{
        alert("Enter wrong charcter, Please Try again")
    }
}


let result=match(cpu,user);
document.write(`CPU:${cpu} <br> USER: ${user} <br> The Winner is ${result.toUpperCase()}`)

