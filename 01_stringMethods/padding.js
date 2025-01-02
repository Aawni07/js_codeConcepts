//. ⇒ used to format the string by adding the specified text at the start/end.

let arr = ['120', '242', '10']
//= padStart(),
// string.padStart(targetLength, padString)
let padS = arr.map((ele) => {
    return ele.padStart(5, '0')
})
console.log(padS);

//= padEnd(),
let pdEd = arr.map((ele) => {
    return ele.padEnd(5, '0')
})
console.log(padS);
