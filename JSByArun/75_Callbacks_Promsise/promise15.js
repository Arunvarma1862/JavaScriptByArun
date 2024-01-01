
function preheatedOven(){

return  new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Preheated the oven');
        resolve()
    }, 1000);
})
}
const mixbatter=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('mixxed the batter');
            resolve()
        }, 2000);
    })
}
const pourBatter=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('pourBatter');
            resolve()
        }, 2000);
    })
}
const putinoven=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('putinoven');
            resolve()
        }, 2000);
    })
}
const bakefor30min=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('bakefor30min');
            resolve()
        }, 2000);
    })
}
const takeoutofOven=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('takeoutofOven');
            resolve()
        }, 5000);
    })
}
const frostcake=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('frostcake');
            resolve()
        }, 2000);
    })
}
const serveCake=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('serveCake');
            resolve()
        }, 2000);
    })
}
 function bakecake(){



   preheatedOven()
    .then(()=>{
       mixbatter()
}).then(()=>{
     pourBatter()
}).then(()=>{
    putinoven()
}).then(()=>{
     bakefor30min()
}).then(()=>{
     takeoutofOven()
})
.then(()=>{
     frostcake()
}).then(()=>{
     serveCake()
})

.catch((error)=>{
    console.log('error', error);
    
})

// console.log(t);

}
bakecake();