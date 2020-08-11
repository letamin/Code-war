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

console.log(getStrings("Las Vegas"))