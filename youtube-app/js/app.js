var apiKey = 'AIzaSyCcx6V_hKT9RRHINxUib0sxNdGax3_s9-k';
var url = 'https://www.googleapis.com/youtube/v3/search';

function search() {

    // Clear the DOM
    $('#results').html('');
    $('#buttons').html('');

    // Get form input

    var query = $('#query').val();

    // GET REQUEST

    $.get(
        url, {
            part: 'snippet, id',
            q: 'rockabye',
            type: 'video',
            key: apiKey
        },
        function (data) {
            console.log(data);
        }
    )

}

search();