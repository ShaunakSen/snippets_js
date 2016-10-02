var temp = 0;
var temp_min = 0;
var temp_max = 0;
var place = "";
var humidity = 0;
var unit = "celcius";

var imageObject = {
    Rain: "rainy_day.jpg",
    Clouds: "cloudy.png",
    Clear: "sunny.png"
};


$(document).ready(function () {
    console.log("Here");
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    var apiKey = "547d9f52bb54d39030737cbfd6533b58";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var params = {
                lon: longitude,
                lat: latitude,
                appid: apiKey
            };
            console.log("Params:", params);
            var uri = buildURI(apiUrl, params);
            runAwesomeWeatherFunction(uri, latitude, longitude);
        });
    }
});
function buildURI(apiUrl, paramsObject) {
    // apiUrl?lat=23.545124899999998&lon=87.2888306&appid=547d9f52bb54d39030737cbfd6533b58
    var uri = apiUrl;
    var keys = Object.keys(paramsObject);
    for (var i = 0; i < keys.length; ++i) {
        if (i == 0) {
            // First Key
            uri += "?" + keys[i] + "=" + paramsObject[keys[i]];
            continue;
        }
        uri += "&" + keys[i] + "=" + paramsObject[keys[i]];
    }
    console.log("Uri is:", uri);
    return uri;
}

function runAwesomeWeatherFunction(uri, latitude, longitude) {
    // ISSUE GET REQUEST TO uri
    $.getJSON(uri, function (response) {
        console.log(response);
        var usefulStuff = filterAPIResult(response);
        console.log(usefulStuff);
        useData(usefulStuff);
    });

    // Do Some Cool Stuff here
}
function useData(usefulStuff) {
    console.log("useful stuff:", usefulStuff)
    temp = Math.round(usefulStuff.temp - 273);
    temp_min = Math.round(usefulStuff.temp_min - 273);
    temp_max = Math.round(usefulStuff.temp_max - 273);
    place = usefulStuff.city;
    humidity = usefulStuff.humidity;
    $('#temp').html(temp + "&#8451");
    $('#place').html(place);
    $('#min_temp').html(temp_min);
    $('#max_temp').html(temp_max);
    $('#humidity').html(humidity);
    var iconUrl = usefulStuff.icon;
    var imageElement = document.getElementById('weather-icon');
    imageElement.src = iconUrl;
    console.log("Main weather is", usefulStuff.main_weather);
    var mainWeather = usefulStuff.main_weather;
    console.log(imageObject[mainWeather]);
    document.getElementById('main-image').src = "img/" + imageObject[mainWeather];
}

function filterAPIResult(response) {
    var usefulStuff = {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        humidity: 0,
        city: "",
        countryCode: "",
        weather: "",
        main_weather: "",
        icon: ""
    };

    usefulStuff.temp = response.main.temp;
    usefulStuff.temp_min = response.main.temp_min;
    usefulStuff.temp_max = response.main.temp_max;
    usefulStuff.humidity = response.main.humidity;
    usefulStuff.city = response.name;
    usefulStuff.countryCode = response.sys.country;
    usefulStuff.weather = response.weather[0].description;
    usefulStuff.main_weather = response.weather[0].main;
    usefulStuff.icon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    return usefulStuff;
}



