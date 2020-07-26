var Mongo = {
    'isValid': function (s) {
        if (typeof s != 'string' || s.length != 24) return false;
        var regex = /[^A-Z!][a-z0-9]+/g;
        return s.match(regex).join("").length == s.length;
    },
    'getTimestamp': function (id) {
        if (typeof id != 'string' && id.length != 24) return false;
        timestamp = id.toString().substring(0, 8);
        var date = new Date(parseInt(timestamp, 16) * 1000);
        return date;
    }
}

console.log(Mongo.getTimestamp('3.333333333333333e+23'))