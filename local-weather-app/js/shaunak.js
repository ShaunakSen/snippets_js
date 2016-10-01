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
    // GET RESULTS
    // Do Some Cool Stuff here
    return;
}