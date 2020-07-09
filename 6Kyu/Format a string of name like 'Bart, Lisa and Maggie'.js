/*  
https://www.codewars.com/kata/53368a47e38700bd8300030d

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

function list(names) {
    var result = []
    for (let i = 0; i < names.length; i++) {
        for (let [key, value] of Object.entries(names[i])) {
            if (`${key}` == 'name') {
                result.push(`${value}`);
            }
        }
    }
    var huhu = ''
    if (result.length <= 1) return result.join(' ');
    if (result.length == 2) return result[0] + ' & ' + result[1];
    if (result.length >= 3) {
        for (let i = 0; i < result.length - 1; i++) {
            huhu += result[i] + ', ';
        }
        var shit = (huhu.substring(0, huhu.length - 2))
        return (shit += ' & ' + result[result.length - 1]);
    }
}

//#2
function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return (xs.length ? xs.join(", ") + " & " + x : x || "")
}