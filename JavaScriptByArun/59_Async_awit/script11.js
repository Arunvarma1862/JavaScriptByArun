// async function harry(){

//     let DW= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("27 deg")    
//         }, 2000);
//     })

//     let BW= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("21 deg")    
//         }, 5000);
//     })

//     // DW.then(alert);
//     // BW.then(alert);
//     console.log('Fetching delehi whether');
//     let delhi= await DW;
//     console.log('Fetced delehi whether '+ delhi);
//     console.log('Fetching ban whether');
//     let ban= await BW;
//     console.log('Fetched ban whether '+ ban);
//     return [delhi,ban]

// }
//  const cherry= async ()=>{
//     return  'Reported generated cheery'
    
//  }
//  async function main(){
//     let a= await harry();
//     let b = await cherry()
//    console.log(a);
//    console.log(b);
   
   
//  }
//  main()




 async function hello(){
    return 5;   
 }

hello().then((value)=>{
    console.log(value)
    // alert(value)
})