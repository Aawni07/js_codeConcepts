//. converts the characters to lower/Upper case
//- toUpperCase()
//> returns new string, with all the characters converted to upperCase

const str = "JavaScript";
const newStr = str.toUpperCase();
console.log({ newStr });

//- toLowerCase()
//> returns new string, with all the characters converted to lowerCase

const newString = str.toLowerCase()
console.log({ newString });

//?> toLowerCase() on null or unDefined.
//> throws a TypeError Exception
const findUserById = (id) => {
    if (id > 0) {
        // look up the user from the database
        return "admin";
    }
    return null;
};

// const user = findUserById(-1).toLowerCase();
// console.log({ user });  // TypeError: Cannot read properties of null (reading 'toLowerCase')

//= by using OptionalChainingOperator (?.)
const findById = (id) => {
    if (id > 0) {
        // look up the user from the database
        return "admin";
    }
    return null;
};
const user1 = findById(-1)?.toLowerCase();
console.log({ user1 });   // undefined


