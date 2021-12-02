import { readFileSync } from "fs";

const data = readFileSync('./1/input.txt').toString('utf-8').split('\n').map(Number)
let collection = []

data.forEach((item, index) => {
    let sum = item + data[index-1] + data[index+1]
    if (sum > 0) {
        collection.push(sum)
    }
})

let count = 0
collection.forEach((item, index) => {
    let diff = (collection[index - 1] - item) * -1
    if (diff > 0) {
        count++
    }
})

console.log(`* Part 2: Total Count: ${count}`)