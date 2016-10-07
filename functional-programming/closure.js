// Creating closures in loops: A common mistake

function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}
function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your email address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age must be >= 18'}
    ];

    for (var i = 0; i < helpText.length; ++i) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
            console.log(item);
            showHelp(item.help);
        }
    }
}
setupHelp();
