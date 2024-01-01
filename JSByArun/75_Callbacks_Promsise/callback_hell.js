// function say(fun){
//     fun()
// }
// say((function (){
//     console.log("hello")
// }))

// 1.Preheat the oven






function bakecake(){
    // setTimeout(() => {     // without name function called Anomnous function
    //     console.log("preheat the oven")
    // }, 2000);

    setTimeout(function(){
        console.log("preheat the oven");
        setTimeout(function(){
           console.log('Mix the ingreients for the batter');
           setTimeout(function(){
            console.log('pour the batter into the baking pan');
             setTimeout(function(){
                console.log("put the pan in the oven");
                setTimeout(function(){
                    console.log('Bake for 30minutes');
                    setTimeout(function(){
                        console.log('Take the pan out of the oven');
                        setTimeout(function(){
                            console.log('Frost the cake');    
                        
                        setTimeout(() => {
                            console.log("serve the food")
                        }, 2000);
                    } ,2000)
                    },2000)  
                },2000)
            },2000)
           },2000)  
        },2000)
    },2000)
}

// bakecake()

function feedback(){
    setTimeout(() => {
        console.log('Eating served food');
    setTimeout(() => {
        console.log('Nice food');
        
    }, 2000);}, 2000);
}
feedback();