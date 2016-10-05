var myApp = angular.module('wikipediaApp', []);

myApp.controller('MainController', ['$scope', 'mainService', function ($scope, mainService) {
    $scope.searchText = "brad";
    $scope.usefulStuff = {};
    $scope.searchText = "";
    $scope.queryNumber = 4;
    $scope.showLoading = false;
    $scope.search = function () {
        if($scope.searchText.trim() == ""){return;}
        $scope.showLoading = true;
        mainService.getData($scope.searchText, $scope.queryNumber).then(function (response) {
            console.log(response);
            $scope.usefulStuff = cleanUp(response);
            console.log($scope.usefulStuff);
            $scope.showLoading = false;
        });
    };
    function cleanUp(response) {
        var usefulStuff = {
            articles: []
        };
        headingList = [];
        bodyList = [];
        urlList = [];
        console.log("Response from API", response.data);
        for (var i = 0; i < response.data[1].length; ++i) {
            var heading = response.data[1][i];
            headingList.push(heading);

            var body = response.data[2][i];
            bodyList.push(body);

            var url = response.data[3][i];
            urlList.push(url);
        }
        var articleList = [];
        for (var x = 0; x < headingList.length; ++x) {
            var articleObject = {
            };
            articleObject.heading = headingList[x];
            articleObject.body = bodyList[x];
            articleObject.link = urlList[x];
            articleList.push(articleObject);
        }
        usefulStuff.articles = articleList;
        return usefulStuff;
    }

}]);

myApp.service('mainService', ['$http', function ($http) {
    this.getData = function (searchText, queryNumber) {
        var params = {
            action: 'opensearch',
            search: searchText,
            limit: queryNumber,
            namespace: 0,
            callback: 'JSON_CALLBACK'
        };
        var apiUrl = "https://en.wikipedia.org/w/api.php";
        var uri = buildURI(apiUrl, params);
        return $http.jsonp(uri);
    }
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