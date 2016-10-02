var temp = 0;
var temp_min = 0;
var temp_max = 0;
var place = "";


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
            var uri = buildURI(apiUrl, params);
            runAwesomeWeatherFunction(uri, latitude, longitude);
        });
    }
});
function buildURI(apiUrl, paramsObject) {
    // apiUrl?lat=23.545124899999998&lon=87.2888306&appid=547d9f52bb54d39030737cbfd6533b58
    var uri = apiUrl;
    console.log(paramsObject);
    console.log(Object.keys(paramsObject));
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
    temp = usefulStuff.temp;
    temp_min = usefulStuff.temp_min;
    temp_max = usefulStuff.temp_max;
    place = usefulStuff.city;
    $('#temp').html(temp);
    $('#place').html(place);
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
        icon: ""
    };

    usefulStuff.temp = response.main.temp;
    usefulStuff.temp_min = response.main.temp_min;
    usefulStuff.temp_max = response.main.temp_max;
    usefulStuff.humidity = response.main.humidity;
    usefulStuff.city = response.name;
    usefulStuff.countryCode = response.sys.country;
    usefulStuff.weather = response.weather[0].description;
    usefulStuff.icon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    return usefulStuff;


}
