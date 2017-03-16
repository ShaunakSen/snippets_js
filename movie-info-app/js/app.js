$(document).ready( () => {
    // listen for submission of form

    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });

    function getMovies(searchText) {
        // console.log(searchText);

        // REQUEST API

        axios.get('http://www.omdbapi.com?s=' + searchText).then((response)=>{
            console.log(response);
            let movieData = response.data.Search;
            let output = '';

            $.each(movieData, (index, movie)=>{
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                        <img src="${movie.Poster}" alt="">
                            <h5>${movie.Title}</h5>
                            <a onclick="movieSelection('${movie.imdbID}')" class="btn btn-primary" href="#">
                                Movie Details
                            </a>
                        </div>
                     </div>
                `
            });

            $('#movies').html(output);

        }).catch((err)=>{
            console.log(err);
        });
    }
});