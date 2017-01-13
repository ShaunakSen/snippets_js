// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    // prevent form from submitting
    e.preventDefault();

    // get form values
    var siteName = document.getElementById('site-name').value;
    var siteURL = document.getElementById('site-url').value;

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

}
