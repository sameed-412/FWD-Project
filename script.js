const options = {
    method : 'GET',
    headers : {
        'X-RapidAPI-Key' : 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host' : 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
    .then(response => response.json())
    .then((response)=>{
        
        cityName.innerHTML = city
        
        console.log(response)

        
        //conversion of sunrise from unix timestamp to 12hr clock
        var SunriseTime = (response.sunrise) * 1000; // Unix timestamp in milliseconds
        var SunriseDate = new Date(SunriseTime);
        var Sunrise12HourTime = SunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        
        //conversion of sunset from unix timestamp to 12hr clock
        var SunsetTime = (response.sunset) * 1000; 
        var SunsetDate = new Date(SunsetTime);
        var Sunset12HourTime = SunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });


        temp.innerHTML = response.temp 
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidity 
        min_temp.innerHTML = response.min_temp 
        max_temp.innerHTML = response.max_temp 
        wind_speed.innerHTML = response.wind_speed 
        wind_degrees.innerHTML = response.wind_degrees 
        sunrise.innerHTML = Sunrise12HourTime
        sunset.innerHTML = Sunset12HourTime
    })
    .catch(err=>console.log(error));
}



//city1
const city1 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London',  options)
        .then(response => response.json())
        .then((response)=>{        
            console.log(response)
            //conversion of sunrise from unix timestamp to 12hr clock
            var SunriseTime_city1 = (response.sunrise) * 1000; // Unix timestamp in milliseconds
            var SunriseDate_city1 = new Date(SunriseTime_city1);
            var Sunrise12HourTime_city1 = SunriseDate_city1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });     
            //conversion of sunset from unix timestamp to 12hr clock
            var SunsetTime_city1 = (response.sunset) * 1000; 
            var SunsetDate_city1 = new Date(SunsetTime_city1);
            var Sunset12HourTime_city1 = SunsetDate_city1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
            
            
            temp_city1.innerHTML = response.temp 
            feels_like_city1.innerHTML = response.feels_like
            humidity_city1.innerHTML = response.humidity
            min_temp_city1.innerHTML = response.min_temp 
            max_temp_city1.innerHTML = response.max_temp 
            wind_speed_city1.innerHTML = response.wind_speed 
            wind_degrees_city1.innerHTML = response.wind_degrees 
            sunrise_city1.innerHTML = Sunrise12HourTime_city1
            sunset_city1.innerHTML = Sunset12HourTime_city1
        })
    }


//city2
const city2 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris',  options)
        .then(response => response.json())
        .then((response)=>{        
            console.log(response)
            //conversion of sunrise from unix timestamp to 12hr clock
            var SunriseTime_city2 = (response.sunrise) * 1000; // Unix timestamp in milliseconds
            var SunriseDate_city2 = new Date(SunriseTime_city2);
            var Sunrise12HourTime_city2 = SunriseDate_city2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });     
            //conversion of sunset from unix timestamp to 12hr clock
            var SunsetTime_city2 = (response.sunset) * 1000; 
            var SunsetDate_city2 = new Date(SunsetTime_city2);
            var Sunset12HourTime_city2 = SunsetDate_city2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
            
            
            temp_city2.innerHTML = response.temp 
            feels_like_city2.innerHTML = response.feels_like
            humidity_city2.innerHTML = response.humidity
            min_temp_city2.innerHTML = response.min_temp 
            max_temp_city2.innerHTML = response.max_temp 
            wind_speed_city2.innerHTML = response.wind_speed 
            wind_degrees_city2.innerHTML = response.wind_degrees 
            sunrise_city2.innerHTML = Sunrise12HourTime_city2
            sunset_city2.innerHTML = Sunset12HourTime_city2
        })
    }

    
//city3
const city3 = () => {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo',  options)
    .then(response => response.json())
    .then((response)=>{        
        console.log(response)
        //conversion of sunrise from unix timestamp to 12hr clock
        var SunriseTime_city3 = (response.sunrise) * 1000; // Unix timestamp in milliseconds
        var SunriseDate_city3 = new Date(SunriseTime_city3);
        var Sunrise12HourTime_city3 = SunriseDate_city3.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });     
        //conversion of sunset from unix timestamp to 12hr clock
        var SunsetTime_city3 = (response.sunset) * 1000; 
        var SunsetDate_city3 = new Date(SunsetTime_city3);
        var Sunset12HourTime_city3 = SunsetDate_city3.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        
        
        temp_city3.innerHTML = response.temp 
        feels_like_city3.innerHTML = response.feels_like
        humidity_city3.innerHTML = response.humidity
        min_temp_city3.innerHTML = response.min_temp 
        max_temp_city3.innerHTML = response.max_temp 
        wind_speed_city3.innerHTML = response.wind_speed 
        wind_degrees_city3.innerHTML = response.wind_degrees 
        sunrise_city3.innerHTML = Sunrise12HourTime_city3
        sunset_city3.innerHTML = Sunset12HourTime_city3
    })
}

//city4
const city4 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melbourne',  options)
        .then(response => response.json())
        .then((response)=>{        
            console.log(response)
            //conversion of sunrise from unix timestamp to 12hr clock
            var SunriseTime_city4 = (response.sunrise) * 1000; // Unix timestamp in milliseconds
            var SunriseDate_city4 = new Date(SunriseTime_city4);
            var Sunrise12HourTime_city4 = SunriseDate_city4.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });     
            //conversion of sunset from unix timestamp to 12hr clock
            var SunsetTime_city4 = (response.sunset) * 1000; 
            var SunsetDate_city4 = new Date(SunsetTime_city4);
            var Sunset12HourTime_city4 = SunsetDate_city4.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
            
            
            temp_city4.innerHTML = response.temp 
            feels_like_city4.innerHTML = response.feels_like
            humidity_city4.innerHTML = response.humidity
            min_temp_city4.innerHTML = response.min_temp 
            max_temp_city4.innerHTML = response.max_temp 
            wind_speed_city4.innerHTML = response.wind_speed 
            wind_degrees_city4.innerHTML = response.wind_degrees 
            sunrise_city4.innerHTML = Sunrise12HourTime_city4
            sunset_city4.innerHTML = Sunset12HourTime_city4
        })
    }

getWeather("Mumbai")
city1()
city2()
city3()
city4()

submit.addEventListener("click" , (place)=>{
    place.preventDefault()//wont reload the page everytime new city is entered
    getWeather(city.value)
    city1()
    city2()
    city3()
    city4()
}
)