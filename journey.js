let backpack = []

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

//backpack.shift()
backpack.splice(0,1)

let foundItem = 'waterstone'
backpack.push(foundItem)

backpack.pop()

//console.log(backpack.length)

backpack.push('greatball', 'antidote', 'revive')

//let satchel = backpack.splice(3,2)
//console.log(satchel)
// console.log(backpack)

// if(backpack.length >=3){
//     for(let i = 0; i<3; i++){
//         console.log(backpack[i])
//         console.log('condition hit')
//     }
// }else{
//     for(let i = 0; i< backpack.length; i++){
//         console.log(backpack[i])
//         console.log('else hit')
//     }
// }


let guessMe = 54

while (guessMe < 100) {
    console.log('----------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log('guessMe is divisible by 4 or 5, added 25')
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('guessMe is divisible by 3, subtracted 27')
    } else {
        guessMe += 3
        console.log('guessMe hit else, added 3')
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now: ${guessMe}`)
}

console.log('final value', guessMe)