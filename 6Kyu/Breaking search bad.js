/*
https://www.codewars.com/kata/52cd53948d673a6e66000576

TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
search('ock') --> ['Rocky 1', 'Rocky 2']

*/
function search(searchTerm) {
    var search = new RegExp(searchTerm, 'i');

    return TITLES.filter(function (title) {
        return search.test(title);
    });
}