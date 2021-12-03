import { readFileSync } from "fs";

const data = readFileSync('./2/input.txt').toString('utf-8').split('\n').map(String)
let x = 0
let y = 0
let aim = 0

data.forEach(item => {
    let direction = item.split(' ')
    switch (direction[0]) {
        case 'forward':
            x += parseInt(direction[1])
            y += aim * parseInt(direction[1])
            break
        case 'up':
            aim -= parseInt(direction[1])
            break
        case 'down':
            aim += parseInt(direction[1])
            break
    }
})

console.log(`* Part Two: Horizontal (${x}) Depth (${y}) = Multiplier (${(x*y)})`)