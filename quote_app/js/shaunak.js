function getQuote() {
    console.log("here");
    var quote = "";
    var author = "";
    $("#quote-text").fadeOut(300);
    $("#quote-author").fadeOut(300);
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function (data) {
        changeTheme();
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
        $("#quote-text").fadeOut(300);
        $("#quote-author").fadeOut(300);
        $.getJSON(url, function (data) {
            changeTheme();
            var quoteObject = data.contents.quotes[0];
            console.log(quoteObject);
            var quote = quoteObject.quote;
            var author = quoteObject.author;
            if (author == "") {
                author = "Annonymous"
            }
            $("#quote-text").html(quote).fadeIn(300);
            $("#quote-author").html(author).fadeIn(300);
        })
    }
}
// ce93d8 7e57c2
colors = ['#c77f7f', '#ce93d8', '#74a3c9', '#7e57c2', '#aed581', '#ce8973', '#c8c121', '#81c784', '#ba5dce'];

function changeTheme() {
    var random = Math.floor(Math.random() * 10);
    random = random == 9 ? 8 : random;
    var themeColor = colors[random];
    var body = document.body;
    body.style.transition = "background 0.3s linear";
    body.style.backgroundColor = themeColor;
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