function applyArray(arr, func){
    for (let i =0;i<arr.length;i++) {
        arr[i] = func(arr[i])
    }
    return arr
}


let numbers = [1, 2, 3, 4, 5]

let doubledNumbers = applyArray(numbers, (number) => {
    return number * 2
})

console.log(doubledNumbers)