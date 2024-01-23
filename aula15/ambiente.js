
let num = [5,4,1,2,8]

// num.indexOf()
// num.sort()

// console.log(num)
// console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)

// for (let n = 0; n < num.length; n++) {
//     console.log(`A posição ${n} tem o valor ${num[n]}`)
// }

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}