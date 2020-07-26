/* 
https://www.codewars.com/kata/52fefe6cb0091856db00030e/javascript

Mongo.isValid('507f1f77bcf86cd799439011')  // true
Mongo.isValid('507f1f77bcf86cz799439011')  // false
Mongo.isValid('507f1f77bcf86cd79943901')   // false
Mongo.isValid('111111111111111111111111')  // true
Mongo.isValid(111111111111111111111111)    // false
Mongo.isValid('507f1f77bcf86cD799439011')  // false (we arbitrarily only allow lowercase letters)

Mongo.getTimestamp('507f1f77bcf86cd799439011')  // Wed Oct 17 2012 21:13:27 GMT-0700 (Pacific Daylight Time)
Mongo.getTimestamp('507f1f77bcf86cz799439011')  // false
Mongo.getTimestamp('507f1f77bcf86cd79943901')   // false
Mongo.getTimestamp('111111111111111111111111')  // Sun Jan 28 1979 00:25:53 GMT-0800 (Pacific Standard Time)
Mongo.getTimestamp(111111111111111111111111)    // false
*/

var Mongo = {
    isValid: function (s) {
        return /^[a-f\d]{24}$/.test(s);
    },
    getTimestamp: function (s) {
        return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
    }
}