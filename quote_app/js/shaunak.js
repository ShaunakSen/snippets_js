function getQuote() {
    console.log("here");
    var quote = "";
    var author = "";
    $("#quote-text").fadeOut(300);
    $("#quote-author").fadeOut(300);
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function (data) {
        console.log(data);
        quote = data.quoteText;
        author = data.quoteAuthor;
        if (author == "") {
            author = "Annonymous"
        }
        $("#quote-text").html(quote).fadeIn(300);
        $("#quote-author").html(author).fadeIn(300);
    })
}

function getQuoteByCategory(category) {
    if (category == "funny" || category == "love" || category == "sports" || category == "inspire") {
        var url = "http://quotes.rest/qod.json?category=" + category;
        $.getJSON(url, function (data) {
            var quoteObject = data.contents.quotes[0]
            console.log(quoteObject);
        })
    }
}

$(document).ready(function () {
    getQuote();
    $("#new-quote").click(function () {
        getQuote();
    });
    $(".custom-button").click(function () {
        var category = this.id;
        getQuoteByCategory(category);
    })

});