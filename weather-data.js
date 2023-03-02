const getWeather = async () => {
    const defaultUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ho-chi-minh-city?unitGroup=metric&key=JQQKA7B32A5DBBNY28V9RC423&contentType=json';
    const response = await axios.get(defaultUrl);
    const data = response.data;
    return data;
};

const showWeather = () => {
    getWeather().then((data) => {
        $(".weather-degree").text(`${(data.days[0].temp).toFixed()}°C`);
        $(".highest-temp").text(`${(data.days[0].tempmax).toFixed()}`)
        $(".lowest-temp").text(`${(data.days[0].tempmin).toFixed()}`)
        $(".celsius").click(()=>{
            $(".weather-degree").text(`${(data.days[0].temp).toFixed()}°C`)
            $(".highest-temp").text(`${(data.days[0].tempmax).toFixed()}`)
            $(".lowest-temp").text(`${(data.days[0].tempmin).toFixed()}`)
            $(".celsius").addClass("selected");
            $(".fahrenheit").removeClass("selected");
        })
        $(".fahrenheit").click(()=>{
            $(".weather-degree").text(`${(data.days[0].temp * 9 / 5 + 32).toFixed()}°F`)
            $(".highest-temp").text(`${(data.days[0].tempmax * 9 / 5 + 32).toFixed()}`)
            $(".lowest-temp").text(`${(data.days[0].tempmin * 9 / 5 + 32).toFixed()}`)
            $(".celsius").removeClass("selected");
            $(".fahrenheit").addClass("selected");
        });
        $(".weathercondition").text(`${data.days[0].conditions}`)
        $(".weather-description").text(`${data.days[0].description}`)
        $(".weather-description-r").text(`${data.days[0].description}`)
        var weathericon = data.days[0].icon;
        switch (weathericon) {
            case "clear-day":
                $('<i class="fa-solid fa-sun-bright">').insertBefore(".weather-content");
                break;
            case "clear-night":
                $('<i class="fa-solid fa-moon"></i>').insertBefore(".weather-content");
                break;
            case "cloudy":
                $('<i class="fa-solid fa-clouds"></i>').insertBefore(".weather-content");
                break;
            case "fog":
                $('<i class="fa-solid fa-cloud-fog"></i>').insertBefore(".weather-content");
                break;
            case "hail":
                $('<i class="fa-solid fa-cloud-hail"></i>').insertBefore(".weather-content");
                break;
            case "partly-cloudy-day":
                $('<i class="fa-solid fa-clouds-sun"></i>').insertBefore(".weather-content");
                break;
            case "partly-cloudy-night":
                $('<i class="fa-solid fa-clouds-moon"></i>').insertBefore(".weather-content");
                break;
            case "rain-snow-showers-day":
                $('<i class="fa-solid fa-snowflake-droplets"></i>').insertBefore(".weather-content");
                break;
            case "rain-snow-showers-night":
                $('<i class="fa-solid fa-snowflake-droplets"></i>').insertBefore(".weather-content");
                break;
            case "rain-snow":
                $('<i class="fa-solid fa-snowflake-droplets"></i>').insertBefore(".weather-content");
                break;
            case "rain":
                $('<i class="fa-solid fa-cloud-rain"></i>').insertBefore(".weather-content");
                break;
            case "showers-day":
                $('<i class="fa-solid fa-cloud-sun-rain"></i>').insertBefore(".weather-content");
                break;
            case "showers-night":
                $('<i class="fa-solid fa-cloud-moon-rain"></i>').insertBefore(".weather-content");
                break;
            case "sleet":
                $('<i class="fa-solid fa-cloud-sleet"></i>').insertBefore(".weather-content");
                break;
            case "snow-showers-day":
                $('<i class="fa-solid fa-cloud-snow"></i>').insertBefore(".weather-content");
                break;
            case "snow-showers-night":
                $('<i class="fa-solid fa-cloud-snow"></i>').insertBefore(".weather-content");
                break;
            case "snowd":
                $('<i class="fa-solid fa-cloud-snow"></i>').insertBefore(".weather-content");
                break;
            case "thunder-rain":
                $('<i class="fa-solid fa-cloud-bolt"></i>').insertBefore(".weather-content");
                break;
            case "thunder-showers-day":
                $('<i class="fa-solid fa-cloud-bolt-sun"></i>').insertBefore(".weather-content");
                break;
            case "thunder-showers-night":
                $('<i class="fa-solid fa-cloud-bolt-moon"></i>').insertBefore(".weather-content");
                break;
            case "thunder":
                $('<i class="fa-solid fa-bolt"></i>').insertBefore(".weather-content");
                break;
            case "wind":
                $('<i class="fa-solid fa-wind"></i>').insertBefore(".weather-content");
                break;
            default:
                break;
        }
    });
}

showWeather();

$(function(){
    const classBg = ['default-bg','white-bg','yellow-bg','black-bg','matcha-bg','purple-bg','orange-bg']
    const randomIndex = Math.floor(Math.random() * classBg.length);
    const item = classBg[randomIndex];
    $(".wrapper").addClass(item);

    setTimeout(function(){
        $(".weatherheader").addClass("appear")
        $(".weatherheader").addClass("appeared")
    },500)
    setTimeout(function(){
        $(".weather").addClass("appear")
        $(".weather").addClass("appeared")
    },800)
    setTimeout(function(){
        $(".weather-degreehighandlow").addClass("appear")
        $(".weather-degreehighandlow").addClass("appeared")
    },1000)
    setTimeout(function(){
        $(".weather-degreehighandlow").addClass("appear")
        $(".weather-degreehighandlow").addClass("appeared")
    },1000)
    setTimeout(function(){
        $(".weather-description").addClass("appear")
        $(".weather-description").addClass("appeared")
    },1200)
})