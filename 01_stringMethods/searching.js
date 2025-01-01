//. helps to analyze, locate and verify the text more efficiently.

let str = `Hello, welcome to the js world`
//= search(), locates the substring in a string using regEx.
//> takes the regEx.
//> returns the **index** of the 1st match in the string.
//> if search(), doesn't find the matched subString, returns -1.

let regEx = /[A-Z]/;
let index = str.search(regEx)
console.log(index);  // 4

//?> passing an object with the Symbol.search method
class EmailDomainChecker {
    constructor(domain) {
        this.domain = domain;
    }
    [Symbol.search](email) {
        if (!email.includes("@")) { returns - 1 };  // checks if email includes '@'
        const [, domain] = email.split("@");
        return domain === this.domain ? 1 : -1;
    }
}

const js_Str = new EmailDomainChecker("jstutorial.net");
let checkInEmail = "hii@jstutorial.net".search(js_Str) === 1;
console.log({checkInEmail});
checkInEmail = "hello@jstutorial.net".search(js_Str) === 1;
console.log({checkInEmail});




//= indexOf(), gets the index of the 1st occurence of a substring in a string
//> returns the index of the firstOccurence of the ele.
//>  -1,  if the str does not contain the substr

let str2 = str.indexOf("js");
console.log({str2});    // 22
console.log(str.indexOf('Aawni'));  // -1



//= lastIndexof(), finds the index of the last occurence of the substring in a string.
//> returns the last occurence of the subString.
//> Here, the search starts from the end of the string.
console.log(str.lastIndexOf('w'));  // 25
console.log(str.lastIndexOf('a'));  // -1



//= includes(), checkd if the string contains the substring
//> returns true/False.
console.log(str.includes('@'));  // false
console.log(str.includes('w',10));  //true



//= startsWith(), checks if the string startsWith the subString.
//> returns true/False.
console.log(str.startsWith('Hello'));   // true
console.log(str.startsWith('Aawni'));   // false



//= endsWith(), checks if the string endsWith the subString.
//> returns true/False.
console.log(str.endsWith('world'));
console.log(str.endsWith('js'));


