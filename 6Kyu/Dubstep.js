/*
https://www.codewars.com/kata/551dc350bf4e526099000ae5

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
=>  WE ARE THE CHAMPIONS MY FRIEND

*/

function songDecoder(song) {
    return (song.replace(/(WUB)+/g, " ").trim())
}