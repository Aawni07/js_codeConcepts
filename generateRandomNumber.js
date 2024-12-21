//- Math.random()
//> returns a random floating-point number ranging b/w 0-1
const a = Math.random() * 10   //.  0.75*10
// console.log(a);

//==========================================================================

//- Math.floor()
//> gets a random integer value
//> returns the nearest decreasing integer value. 
//> used to convert decimal to integer value.

const b = Math.floor(Math.random() * 10);
// console.log(b);

//==========================================================================

//- to get the integer value b/w 2nos.
const max = 45;
const min = 2;

const c = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(c);
