// allows to remove the unwanted whitespaces from the string, ensuring the clean and the formatted string.

let str = '  hello_world.  '
//= trim(), removes whitespace characters from the string
//> returns new string with whitespaces trimmed from the beginning & end of a string.
//> returns completely new string and doesn't change the original string.
//> whiteSpace characters : '', \t, \r, \n, \v, \f

console.log(str.trim());

//?> chaining with other string methods
let name = ' Aawni K '
let [firstName, lastName] = name.trim().split(' ');
console.log({firstName, lastName});
console.log(str.trim().replace('world','Javascript'));


//= trimStart(), removes the leading whitespaces from the string
//> returns a new string and doesn’t change the original string.
console.log(str.trimStart());


//= trimEnd(), removes the ending whitespace from the string.
//> remove the whitespace from the end of a string
//> remove the trailing newline characters
console.log(str.trimEnd());
let result = str.trimEnd();
console.log({str});
console.log({result});


//?> chaining with other string methods
console.log(str.trimEnd().replace('world','Javascript'));


