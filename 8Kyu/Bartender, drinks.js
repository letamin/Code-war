/*
https://www.codewars.com/kata/568dc014440f03b13900001d

input	                  Output
"Jabroni"	              "Patron Tequila"
"School Counselor"	      "Anything with Alcohol"
 "Programmer"	          "Hipster Craft Beer"
 "Bike Gang Member"	      "Moonshine" 
 "Politician"	          "Your tax dollars" 
 "Rapper"	              "Cristal" 
 *anything else*	      "Beer" 
*/

function getDrinkByProfession(param) {
    let map = new Map([
        ["jabroni", "Patron Tequila"],
        ["school counselor", "Anything with Alcohol"],
        ["programmer", "Hipster Craft Beer"],
        ["bike gang member", "Moonshine"],
        ["politician", "Your tax dollars"],
        ["rapper", "Cristal"]
    ]);

    let normal = param.toLowerCase();
    return map.has(normal) ? map.get(normal) : "Beer";
}

//#2
function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch (param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}