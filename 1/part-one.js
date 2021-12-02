import { readFileSync } from "fs";

const data = readFileSync('./1/input.txt').toString('utf-8').split('\n').map(Number)
let count = 0

data.forEach((item, index) => {
    let diff = (data[index - 1] - item) * -1
    if (diff > 0) {
        count++
    }
})

console.log(`* Part 1: Total Increases: ${count}`)