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
        if(author == ""){
            author = "Annonymous"
        }
        $("#quote-text").html(quote).fadeIn(300);
        $("#quote-author").html(author).fadeIn(300);
    })
}
$(document).ready(function () {
    getQuote();
    $("#new-quote").click(function () {
        getQuote();
    });

});