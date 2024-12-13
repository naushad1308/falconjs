let arr = [2, 4, 5, 7, 8, 4, 5]

let CloudCipher = "CloudCipher"
let CodeSniper = "CodeSniper"
let BoldBinary = "BoldBinary"

const usernames = [
    "PixelWarrior",
    "CodeCrusader",
    "TechNomad42",
    "QuantumGamer",
    "VirtualVortex",
    "EpicCoderX",
    "CyberHawk",
    "NeonSpecter",
    "GlitchRider",
    "NovaNinja",
    "EliteBouncer",
    "ShadowCoder",
    "BinaryBeast",
    "CrypticSage",
    "DataDynamo",
    "CodeSniper",
    "AlphaCircuit",
    "BitCrafter",
    "PixelStorm",
    "SkyWalker99",
    "CloudCipher",
    "FrostByte",
    "WarpedMind",
    "StarryDev",
    "CodePhoenix",
    "AI_Prodigy",
    "SwiftSamurai",
    "QuantumByte",
    "CleverClutch",
    "BugHunter",
    "ZetaZoner",
    "TurboCoder",
    "CyberWarden",
    "HexPixel",
    "MegaMonk",
    "DevDare",
    "TechieTwist",
    "NeonPulse",
    "MysticByte",
    "BoldBinary",
    "RocketRacer",
    "ZeroXplorer",
    "FusionFury",
    "RoboRider",
    "DigitalDream",
    "CyberKnight",
    "HyperHacker",
    "CodeTrailblazer",
    "QuantumRider",
    "EpicTechie",
    "GlitchHunter"
];

// let userInput=
// map method is a higher order function that accept three parameter(elem,index,array) and return new modified array
// let newArray = arr.map((elem, i, arr) => elem + 5)
// console.log(newArray)

// let filteredArray = arr.filter((elem, i, arr) => elem > 5)
// console.log(filteredArray)


// let searchInput = prompt("Enter User Name")
// let filteredUser = usernames.filter((user, i, array) => {
//     let filteredData = user.toLowerCase().startsWith(searchInput.toLowerCase())

//     if (filteredData.length <= 2) {
//         return filteredData
//     }

// })

// console.log(filteredUser)




// const numbers = [1, 2, 3];

// let result = numbers.reduceRight((acc, currentValue) => {
//     return acc + currentValue
// }, 5)
// console.log(result)



const array = [1, 2, 3, 25, 2, 100, 'f', 'a'];
// const strArray = ['d', 'g', 't', 'a',]

// for (let i = 0; i < array.length; i++) {

//     if (number[i] === 0) {

//     }

// }

console.log(array.sort((a, b) => {
    return a - b
}))
// console.log(array)
// strArray.sort()

// console.log(strArray)

// let arrs = ['hello', 'bye', 'hi']

// console.log(arrs.reverse().toString())


let user = "SumitRoySingh"

let userArray = user.split('').reverse().join('')

console.log(userArray)
