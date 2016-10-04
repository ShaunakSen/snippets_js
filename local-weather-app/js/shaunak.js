var temp = 0;
var temp_min = 0;
var temp_max = 0;
var place = "";
var humidity = 0;
var unit = "celcius";


$(document).ready(function () {
    console.log("Here");
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    var apiKey = "547d9f52bb54d39030737cbfd6533b58";
    $.getJSON("http://ip-api.com/json", function (data) {
        var latitude = data.lat;
        var longitude = data.lon;
        var params = {
            lon: longitude,
            lat: latitude,
            appid: apiKey
        };
        console.log("Params:", params);
        var uri = buildURI(apiUrl, params);
        runAwesomeWeatherFunction(uri, latitude, longitude);
        $('#toggleButton').click(function () {
            toggleUnit();
        })
    })

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
    console.log("useful stuff:", usefulStuff);
    temp = Math.round(usefulStuff.temp - 273);
    temp_min = Math.round(usefulStuff.temp_min - 273);
    temp_max = Math.round(usefulStuff.temp_max - 273);
    place = usefulStuff.city;
    humidity = usefulStuff.humidity;
    $('#temp').html(temp + "&#8451");
    $('#place').html(place);
    getCountryName(usefulStuff.countryCode);
    $('#humidity').html(humidity);
    var iconUrl = usefulStuff.icon;
    var imageElement = document.getElementById('weather-icon');
    imageElement.src = iconUrl;
    console.log("Main weather is", usefulStuff.main_weather);
    var mainWeather = usefulStuff.main_weather;
    getQuoteAndImage(mainWeather);
}


function getQuoteAndImage(mainWeather) {
    $.getJSON("https://api.myjson.com/bins/3yyjs", function (quotes) {
        console.log("Quotes:", quotes.quotes[mainWeather]);
        var quotesArray = quotes.quotes[mainWeather];
        var randomNo = getRandomArbitrary(0, quotesArray.length - 1);
        var randomQuote = quotesArray[Math.round(randomNo)];
        console.log(randomQuote);
        $('#quote').html(randomQuote);
        document.getElementById('main-image').src = quotes.images[mainWeather];
    });
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


function getCountryName(code) {
    $.getJSON("https://restcountries.eu/rest/v1/alpha/" + code, function (response) {
        var countryName = response.name;
        $('#country').html(countryName);
    })
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function celciusToFarenheit(cel) {
    // (f-32)/9 = c/5
    return Math.round(((cel / 5.0) * 9) + 32);
}
function farenheitToCelecius(far) {
    return Math.round(5 * ((far - 32.0) / 9.0));
}

function toggleUnit() {
    if (unit == "celcius") {
        temp = celciusToFarenheit(temp);
        unit = "farenheit";
        $('#temp').html(temp + "&deg; F");
        $('#toggleButton').html("Change Unit to Celcius");
    }
    else if (unit == "farenheit") {
        temp = farenheitToCelecius(temp);
        unit = "celcius";
        $('#temp').html(temp + "&deg; C");
        $('#toggleButton').html("Change Unit to Farenheit");
    }
}