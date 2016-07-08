$(document).ready(function () {
    $.getJSON("http://quotes.rest/qod.json", function (data) {
        console.log(data);
    })
});