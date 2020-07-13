/*
https://www.codewars.com/kata/58e3e62f20617b6d7700120a

trianglePerimeter(new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))) => 120
*/

function trianglePerimeter(ᐃ) {
    var ab = Math.hypot(ᐃ.a.x - ᐃ.b.x, ᐃ.a.y - ᐃ.b.y);
    var bc = Math.hypot(ᐃ.b.x - ᐃ.c.x, ᐃ.b.y - ᐃ.c.y);
    var ca = Math.hypot(ᐃ.c.x - ᐃ.a.x, ᐃ.c.y - ᐃ.a.y);
    return ab + bc + ca;
}