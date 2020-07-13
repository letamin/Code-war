/*
https://www.codewars.com/kata/59df2f8f08c6cec835000012

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

meeting(s) => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
*/

function meeting(s) {
    var names = s.toUpperCase().split(';');
    var nameArray = names.map(name => name.split(':')).map(name => name.reverse());

    return '(' + nameArray.sort().map(name => name.join(', ')).join(')(') + ')';
}
