// https://api.openweathermap.org/data/2.5/weather?q={germany}&appid={820e558cccd8484068b1818db2754cb5}&unit=metric

const apiKey="820e558cccd8484068b1818db2754cb5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector('.search input')
const searchbtn=document.querySelector('.search button')
const weathericon=document.querySelector(".weather-icon")


async function checkWeather(city){



    try{
     
        const response =await fetch( apiUrl + city + `&appid=${apiKey}`);
        var data= await response.json()
        console.log(data)


        if(response.status== 404)
        {
            document.querySelector(".invalid").style.display="block";
            document.querySelector(".weather").style.display="none";


        }

        else{
            document.querySelector(".invalid").style.display="none";
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temprature').innerHTML=Math.round(data.main.temp) + "°C ";
        document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/hr";


        // --to update image icon--
        if(data.weather[0].main ==  "Clouds") {
            
            weathericon.src="images/clouds.png"
        }

        else 
        if(data.weather[0].main ==  "Clear") {
            
            weathericon.src="images/clear.png"
        }
        else 
        if(data.weather[0].main ==  "Rain") {
            
            weathericon.src="images/rain.png"
        }
        else 
        if(data.weather[0].main ==  "Drizzle") {
            
            weathericon.src="images/drizzle.png"
        }

        else 
        if(data.weather[0].main ==  "mist") {
            
            weathericon.src="images/mist.png"
        }

        document.querySelector(".weather").style.display="block"


      

     }
    }

     catch(error){
        console.log(error)
     }
    

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})




