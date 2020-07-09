/* 
https://www.codewars.com/kata/593c0ebf8b90525a62000221

"fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"
=> "fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"

*/
function solution(input) {
    var fruit = [];
    var meat = [];
    var other = [];
    var vegetable = [];
    var array = input.split(",");
    for (let index = 0; index < array.length; index++) {
        if (array[index].split('_')[0] == 'fruit') fruit.push(array[index].replace("fruit_", ""));
        else if (array[index].split('_')[0] == 'meat') meat.push(array[index].replace("meat_", ""));
        else if (array[index].split('_')[0] == 'vegetable') vegetable.push(array[index].replace("vegetable_", ""));
        else other.push(array[index].split("_")[1]);

    }

    return `fruit:` + fruit.sort().join(',') + '\n' + `meat:` + meat.sort().join(',') + '\n' + `other:` + other.sort().join(',') + '\n' + `vegetable:` + vegetable.sort().join(',');
}