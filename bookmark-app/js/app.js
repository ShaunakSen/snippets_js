// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // prevent form from submitting
    e.preventDefault();

    // get form values
    var siteName = document.getElementById('site-name').value;
    var siteURL = document.getElementById('site-url').value;

    if(!validateForm(siteName, siteURL)){
        return false;
    }

    // create an object to save to local storage

    var bookmark = {
        name: siteName,
        url: siteURL
    };

    console.log(bookmark);

    // Local Storage test
    // Local storage stores strings only
    // so we need to parse JSON to string and back

    /*localStorage.setItem('test', 'hello world!!');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));*/


    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);

        //        write to localStorage in form of a string
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //        get bookmarks from localStorage

        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //        add the new bookmark
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }

//    clear form
    document.getElementById('myForm').reset();

    fetchBookmarks();

}

function deleteBookmark(url) {
    console.log("deleting.." + url);
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));


    for (var i = 0; i < bookmarks.length; ++i) {
        if (bookmarks[i].url === url) {
            //            remove this bookmark
            bookmarks.splice(i, 1);
        }
    }
    //    reset localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    //    re-fetch bookmarks
    fetchBookmarks();
}


function fetchBookmarks() {
    //        get bookmarks from localStorage

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);

    var bookmarksResults = document.getElementById('bookmark-results');

    //    Build our output

    bookmarksResults.innerHTML = "";

    for (var i = 0; i < bookmarks.length; ++i) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' + '<h3>' +
            name +
            '<a class="btn btn-default" target="_blank" href="' + url + '">' + 'Visit</a>' +
            '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a>' +
            '</h3>' + '</div>';
    }
}


function validateForm(siteName, siteURL){
    //    validate
    if (!siteName || !siteURL) {
        alert("Please fill in the form");
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);


    if (!siteURL.match(regex)) {
        alert("Enter valid url");
        return false;
    }
    return true;
}
