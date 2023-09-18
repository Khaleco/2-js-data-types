/* 
    ? Variables
    * Containers that store data in memory
    * declaration
        * allows memory space to be reserved by using an identifier
        * starts with let, var, or const keyword
        * connot start with a number of character other than $ or _
        * if no vaule is assigned, it's undefined
    * intitlization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, ect.)
        * can be reassigned (except for const)
*/

// Variable declaration
let firstName;
console.log(firstName);

// Variables declaration and variable initilizartion
let lastName = "Coffran";
console.log(lastName);

// Reassignment
firstName = "Khale";
console.log(firstName);

// ? String Concatenate the name
console.log(firstName + lastName);

// ? String Interpolate the name and assign it to fullName variable
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// (a)  (b) (c)       (d)
let address ="123 Main st, Salem, MA"
// (e) =       (f)

/* 
    * a - keyword
    * b - variable identifier
    * c - assignment operator
    * d - value or initalizer
    * e - variable declaration
    * f - variable initilization or value assignment
*/

// ? Var is hoisted whereas let is not
// ! DO NOT USE !
var age = 26;
console.log(age);

// ? Const variable CANNOT have a reassigned value
const ssn = "123-45-6789";
console.log(ssn);
// ssn = "333-33-3333"; // TypeError - cannot reassign const

/* 
    ? Coding Practices for Variables
    * be concise (ex: fistName instead of usersFirstBornBlondHairedName)
    * be specific (ex: item instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * nocase
    * SCREAMING_CASE (used for env variable ect.)
*/

/* 
    ! Challenge
    * set varibles of fName, lName, houseNumber, aptNum (if applicable)
    * street, city, state, post code
    * concatenate or interoplate them together in a variable called addressStamp
    * console log it
    ! Spicey Mode
    * assign the state value to be lowercase, but when you console log, it should capitalize the state
*/

let fName = "Khale";
let lName = "Coffran";
let houseNumber = 255;
let streetName= "Sugarbush Rd";
let city = "Brownsville";
let state = "vt";
let postCode = "05037";

let addressStamp = fName + " " + lName + ", " + houseNumber + ", " + streetName + ", " + city + ", " + state.toUpperCase() + ", " + postCode;

console.log(addressStamp);