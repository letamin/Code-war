function inAscOrder(arr) {
    return arr.every((_, index) => index == 0 || arr[index] > arr[index - 1])
}

console.log(inAscOrder([1, 2, 3, 4]))