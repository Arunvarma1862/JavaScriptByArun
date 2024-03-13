fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((response2)=>{
    console.log(response2)
    console.log(response2.followers)

}).catch((error)=>{
    console.log(error)
})