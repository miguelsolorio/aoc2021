import { readFileSync } from "fs";

const data = readFileSync('./2/input.txt').toString('utf-8').split('\n').map(String)
let x = 0
let y = 0

data.forEach(item => {
    let direction = item.split(' ')
    switch (direction[0]) {
        case 'forward':
            x += parseInt(direction[1])
            break
        case 'up':
            y -= parseInt(direction[1])
            break
        case 'down':
            y += (parseInt(direction[1]))
            break
    }
})

console.log(`* Part One: Horizontal (${x}) Depth(${y}) = Multiplier (${(x*y)})`)