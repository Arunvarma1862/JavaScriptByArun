

const additem=async (item)=>{
    await randomdelay();
    let src=document.createElement('div');
    src.innerHTML= item;
    document.body.children[0].append(src)
}

const randomdelay= ()=>{
  return new Promise((resolve,reject)=>{
    timeout= Math.random()*6+1
    setTimeout(() => {
        resolve();
    }, timeout*1000);
  })
  
}

async function main() {

    let t = setInterval(() => {
      let last = document.body.getElementsByTagName("div");
       console.log(last);
      last = last[last.length - 1];
        console.log(last)
      if (last.innerHTML.endsWith("...")) {
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
      } else {
        last.innerHTML = last.innerHTML + ".";
      }
    }, 100);

    let text = [
      "Intializing Hacking",
      "do somthing else",
      "jncncl jdjj",
      "processsing data has done byasjjd",
      "script done",
      "hellooo",
    ];

    for (let item of text) {
      await additem(item);
      console.log("1");
      
    }
    await randomdelay();
    clearInterval(t);
  }
  main();
