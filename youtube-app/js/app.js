var apiKey = 'AIzaSyCcx6V_hKT9RRHINxUib0sxNdGax3_s9-k';
var url = 'https://www.googleapis.com/youtube/v3/search';

$(document).ready(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
    });

    $('#submit-button').click(function () {
        search();
    })
});

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
            q: query,
            type: 'video',
            key: apiKey
        },
        function (data) {
            console.log(data);
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            $.each(data.items, function (index, item) {
                var output = buildOutput(item);
                // Display Results
                $('#results').append(output);
            });
        }
    )
}

function buildOutput(item) {

    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumbnail = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;


}

