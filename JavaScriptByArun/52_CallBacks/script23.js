

function hello(){
    console.log('hello')
}

function main(callback){
    console.log('hii')
    callback()
}
main(hello)


function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,callback){
    console.log('adding')
    callback(a,b)
}
calculator(1,2,sum)


function loadscript(src,callback){
    let script= document.createElement('script');
    script.src=src;
    script.onload=function(){
        console.log('script loaded '+ src)
        callback(null,src)

    }
    script.onerror=function(){
        console.log('script not loaded '+src)
        callback(new Error('src is not loaded'))
    }

    document.body.append(script)
}

function helloo(error,srcc){
       if(error){
        alert("he "+error)
       }
       alert("hello world "+srcc)
}

loadscript('https://cdn.jssdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',helloo);