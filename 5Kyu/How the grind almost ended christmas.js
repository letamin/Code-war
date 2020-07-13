/*
https://www.codewars.com/kata/52abd4c941fcec78ce00002e

prioritizeMissiles([
  {name: 'DASHER_V3', distance: 1000, speed: 100},
  {name: 'DANCER_V2.3', distance: 1000, speed:10},
  {name: 'PRANCER_V1.2', distance: 1000, speed: 1} 
]); // => returns ['DASHER_V3', 'DANCER_V2.3', 'PRANCER_V1.2']

prioritizeMissiles([
  {name: 'VIXEN_V1.1', distance: 500, speed: 4},
  {name: 'COMET_V4', distance: 1000, speed: 500},
  {name: 'CUPID_V5', distance: 100, speed: 1} 
]); // => returns ['COMET_V4', 'CUPID_V5', 'VIXEN_V1.1']
*/

function prioritizeMissiles(missiles) {
    missiles.sort(timeSort);
    return missiles.map(missile => missile.name)
}

function timeSort(missileA, missileB) {
    return missileA.distance / missileA.speed - missileB.distance / missileB.speed;
}