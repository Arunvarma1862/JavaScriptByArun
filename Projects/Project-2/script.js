const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2f0b8e15amshe8ac626f1a81d2dp123ff2jsnc57a9c6dc02f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function main(city){
try {
    cityName.innerHTML=city
	const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options);
	const result = await response.json();
    let temps=document.getElementById('temp')
    let mTemp=document.getElementById('min_temp')
    let MTemp=document.getElementById('max_temp')
    let Cloud=document.getElementById('cloud_pct')
    let humidity2=document.getElementById('humidity2')

    Cloud.innerHTML= result.cloud_pct
    temps.innerHTML=   result.temp
    // temp2.innerHTML=   result.temp
    feels_like.innerHTML= result.feels_like
    humidity.innerHTML= result.humidity
    humidity2.innerHTML= result.humidity
    mTemp.innerHTML= result.min_temp
    MTemp.innerHTML= result.max_temp
    wind.innerHTML= result.wind_speed
    wind_speed.innerHTML= result.wind_speed
    wind_degrees.innerHTML= result.wind_degrees
    sunrise.innerHTML= result.sunrise
    sunset.innerHTML= result.sunset
	console.log(result);
} catch (error) {
	console.error(error);
}
}
let btn= document.getElementById('submit')
btn.addEventListener('click',(e)=>{
     e.preventDefault()
     main(city.value)
})

// main()

// 
//   fetch(url, options)
//     .then((response)=>{ 
//          return  response.json()
         
//     })
//     .then((result)=>{
//       console.log(result)
//     })


async function main2(city){
    try {

        let find=document.querySelectorAll('.cityname')
        let a =Array.from(find)
        console.log(a)
        a[1].style.color="blue"
         let fi=a[1].innerHTML;
        console.log(fi)
         if( fi == city){
       
        const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options);
        const result = await response.json();
        // let temps=document.getElementById('temp')
        // let mTemp=document.getElementById('min_temp')
        // let MTemp=document.getElementById('max_temp')
        // let Cloud=document.getElementById('cloud_pct')
        // let humidity2=document.getElementById('humidity2')
        let box=document.querySelectorAll('.box')
    
        box[0].innerHTML= result.cloud_pct
        box[1].innerHTML= result.temp
        box[2].innerHTML= result.feels_like
        box[3].innerHTML= result.humidity
        box[4].innerHTML= result.humidity
        box[5].innerHTML= result.min_temp
        box[6].innerHTML= result.max_temp
        box[7].innerHTML= result.wind_speed
        box[8].innerHTML= result.wind_speed
        box[9].innerHTML= result.wind_degrees
        console.log(result);
         }
    } catch (error) {
        console.error(error);
    }

    }
    main2("Mumbai")
  