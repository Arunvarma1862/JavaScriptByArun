async function harry() {
  let delhiWether = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });

  let bangaloreweher = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 6000);
  });

  let mumbaiweather= new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('28 deg')
    }, 5000);
  })

  //      delhiWether.then(alert);
  //      bangaloreweher.then((value)=>{
  //         alert(value)
  //     })

  console.log('Fetching delhi whether');
  let delhi = await delhiWether;
  console.log('Fetched delhi whether'+ delhi);

  console.log('Fetching bangalore whether');
  let banga = await bangaloreweher;
  console.log('Fetched bangalore whether'+banga);

  let mumbai=await mumbaiweather;
  return [delhi, banga, mumbai];
}

const chery=  async ()=>{
    console.log('Hello cheerry');
    
}

async function main(){
  
    console.log("Whetther report");
    let a= await harry();
    console.log("wea " +a)
    let b=  await chery();
    console.log(b)

    // a.then((value)=>{
    //     console.log("value "+value);
        
    // })
}

main();


// async function hello(){
//     return 5;
// }
// hello().then((value)=>{
//     alert(value)
// })



async function hello(){
  return 5;
}
hello().then((value)=>{
  console.log(value);
  alert(value);
})