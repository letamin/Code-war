/*
https://www.codewars.com/kata/52a6b34e43c2484ac10000cd
*/

function getNiceNames(people) {
    var nice = [];
    people.forEach(person => {
        if (person.wasNice == true) {
            nice.push(person.name);
        }
    })

    return nice;
}

function getNaughtyNames(people) {
    var naughty = [];
    people.forEach(person => {
        if (person.wasNice == false) {
            naughty.push(person.name);
        }
    })

    return naughty;
}

//#2:
function getNiceNames(people) {
    return people.filter(person => person.wasNice).map(person => person.name);
}

function getNaughtyNames(people) {
    return people.filter(person => !person.wasNice).map(person => person.name);
}