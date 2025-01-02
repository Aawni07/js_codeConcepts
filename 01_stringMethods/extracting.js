//. breaks down the string -> smaller pieces 

str = `_Hello_World_`

//= split(), splits the string  ->  arrayOfSubStrings by a separator.

// split([seperator, [,limit]])
//> separator, where each split should occur in the original string. Separator can be a string or a regular Expression.
//> limit, can be zero or the +ve num. which specifies the number of substrings. 
// If Limit = Zero, split() returns an EmptyArray.
// If limit = 1, split() returns an array of String.

console.log(str.split('_'));
console.log(str.split('_', 2));
console.log(str.split(/_/));



//= substring(), extract the substring from a string.
// str.substring(startIndex [, endIndex])
//> startIndex, firstCharcter which is being included in the returned String.
//> endIndex, lastCharacter which is not included in the returned string.

//?> Extracting the substring from the beginning of the string
console.log(str.substring(0,10));

//?> Extracting the substring to the end of the string
console.log(str.substring(11));

//?> Extracting the domain from the email
let email = 'aawni@gmail.com';
console.log(email.indexOf('@')+1);
let domain = email.substring(email.indexOf('@')+1)  // email.substring(6)
console.log(domain);



//= slice(), extracts a part of a string.
// slice(start, end)

let str1 = str.slice(3)
console.log({str1});

let str2 = str.slice(-5)
console.log({str2});

//> if start is omitted, undefined or cannot be converted to a number => the slice() starts the extraction from the beginning of the string.
//> if the start is greater than or equal to the length of the string, slice() returns " ".
let str3 = str.slice(15)
console.log({str3});

