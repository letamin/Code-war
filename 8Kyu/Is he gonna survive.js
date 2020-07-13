/*
https://www.codewars.com/kata/59ca8246d751df55cc00014c

hero(10, 5) => true
hero(1500, 751) => false
*/

function hero(bullets, dragons) {
    return dragons * 2 <= bullets;
}