var myApp = angular.module('wikipediaApp',[]);
myApp.controller('MainController', ['$scope', 'mainService', function ($scope, mainService) {
    console.log(mainService.getURI());
}]);

myApp.service('mainService', ['$http', function ($http) {
    var params = {
        action: 'opensearch',
        search: 'sachin',
        limit: 10,
        namespace: 0,
        format: 'json'
    };
    var apiUrl = "https://en.wikipedia.org/w/api.php";
    var uri = buildURI(apiUrl, params);
    console.log(uri);
    this.getURI = function () {
        return uri;
    };
}]);

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