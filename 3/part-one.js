import { readFileSync } from "fs";

const data = readFileSync('./3/input.txt').toString('utf-8').split('\n').map(String)

let col1 = []
let col2 = []
let col3 = []
let col4 = []
let col5 = []
let col6 = []
let col7 = []
let col8 = []
let col9 = []
let col10 = []
let col11 = []
let col12 = []

for(let i = 0; i < data.length; i++){
    for (let j = 0; j < data[i].length; j++){
        switch(j){
            case 0:
                col1.push(data[i][j])
                break
            case 1:
                col2.push(data[i][j])
                break
            case 2:
                col3.push(data[i][j])
                break
            case 3:
                col4.push(data[i][j])
                break
            case 4:
                col5.push(data[i][j])
                break
            case 5:
                col6.push(data[i][j])
                break
            case 6:
                col7.push(data[i][j])
                break
            case 7:
                col8.push(data[i][j])
                break
            case 8:
                col9.push(data[i][j])
                break
            case 9:
                col10.push(data[i][j])
                break
            case 10:
                col11.push(data[i][j])
                break
            case 11:
                col12.push(data[i][j])
                break
        }
    }
}

let gamma = ''
let epsilon = ''
function countBits(arr){
    let count = 0
    let zero = 0
    let one = 0
    arr.forEach(item => {
        switch (item) {
            case '0':
                zero++
                break
            case '1':
                one++
                break
        }
    })
    count++
    
    if(zero > one){
        gamma += '0'
        epsilon += '1'
    }
    else if (zero < one){
        gamma += '1'
        epsilon += '0'
    }
    // console.log(`Gamma is ${parseInt(gamma, 2)}, Epsilon is ${parseInt(epsilon, 2)}`)
}

countBits(col1)
countBits(col2)
countBits(col3)
countBits(col4)
countBits(col5)
countBits(col6)
countBits(col7)
countBits(col8)
countBits(col9)
countBits(col10)
countBits(col11)
countBits(col12)

let consumption = parseInt(gamma, 2) * parseInt(epsilon, 2)
console.log(`* Part One: Power Consumption is ${consumption}`)