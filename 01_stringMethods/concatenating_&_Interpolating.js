//. concatenate strings and substitute variables directly using template Literals.

//- concat()
//> accepts the list of string, and returns a newString containing the combination of strings.
//> string.concat(str1, [...strN]);

//?> concatenating strings
let greet = 'Hi';
let msg = greet.concat(' ', 'John');
console.log(msg);

//?> concatenating the arrayOfStrings
let colors = ['Blue',' ','Green',' ','Teal'];
let result = ''.concat(...colors);  //=>  ...colors, has an array arg which unpacks the elements of an array.

console.log(result);


//- template Literals
//> '',"", ``
//> `${ele}`, lets to embed the variables & strings in a string.

