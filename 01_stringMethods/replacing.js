//. which performs data cleaning and transformation effectively.

let str = `_Hello_World_`
//- replace(), replace a substring with the new one.
//> this doesn't change the original string but returns a new string.
//> supports regEx.

let str1 = str.replace('World', 'JS')
console.log({str1});
let str2 = str.replace(/World/g, "JavaScript");
console.log({str2});
let str3 = str.replace(/hello/gi, "JavaScript");
console.log({str3});


//- replaceAll(), which replaces all the occurences of the substring with a new one.

//> case-senstive search.



