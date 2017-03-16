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
        }).catch((err)=>{
            console.log(err);
        });
    }
});