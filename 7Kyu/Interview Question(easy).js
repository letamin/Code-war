/* 
https://www.codewars.com/kata/5b358a1e228d316283001892/javascript

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
*/

function getStrings(city) {
    let map = new Map();
    let result = ''
    city = city.toLowerCase().replace(/ /g, '').split('').forEach(i => {
        if (map.has(i)) {
            let value = map.get(i);
            map.set(i, ++value)
        } else map.set(i, 1)
    })

    map.forEach((value, key) => {
        result += key + ':';
        for (let i = 0; i < value; i++) {
            result += '*';
        }
        result += ','
    })
    return result.slice(0, -1)
}

//#2
function getStrings(city) {
    city = city.toLowerCase().replace(/ /g, '');
    let obj = {};
    let result = ''
    for (const c of city) {
        if (!(c in obj)) {
            obj[c] = "*"
        } else obj[c] += '*'
    }
    for (const key in obj) {
        result += key + ':' + obj[key] + ','
    }
    return result.slice(0, -1)
}