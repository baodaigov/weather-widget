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
        })
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
})