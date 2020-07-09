/**  
https://www.codewars.com/kata/5266876b8f4bf2da9b000362

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 
*/
function likes(names) {
    // TODO
    if (names.length <= 0) return 'no one likes this';
    if (names.length === 1) return (names[0] + ' likes this');
    if (names.length === 2) return (names[0] + ' and ' + names[1] + ' like this');
    if (names.length === 3) return (names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this');
    if (names.length > 3) return (names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this')
}