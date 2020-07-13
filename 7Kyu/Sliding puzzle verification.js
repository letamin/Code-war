/*
https://www.codewars.com/kata/5e28b3ff0acfbb001f348ccc
*/

function isSolved(board) {
    var trueBoard = board.reduce((total, index) => total.concat(index), [])
    for (let i = 0; i < trueBoard.length - 1; i++) {
        if (trueBoard[i] + 1 != trueBoard[i + 1]) return false;
    }
    return true;
}