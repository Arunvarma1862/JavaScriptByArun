console.log('lets write javascript');


async function main(){
     let a = await fetch("http://127.0.0.1:3000/JSByArun/84_Spotify_clone/songs");
    let response= await a.text()
    console.log(response);
    
}
main()

