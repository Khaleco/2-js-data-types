console.log("Hello World!");

/*
    ? JavaScript
    * founded in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function -- functions are treated link any other variable
    * functional language
    * object-orineted language
    * prototype-based
    * imperative
    * weakly typed (dynamic)
    * multi-paradigm language
    * ECMAScript -- oraniziation setting laguage standards
*/

/*
    ? Coments
    * blocks of code that are not being interpreted
    * denoted by // of single-line
    * dentoed by /* for multi-line
    * coments are read but not executed
    * as learners, it helps us with note taking
    * as devs, it documents our code making it more maintainable
    * ctrl + / for single-line
    * alt + shift + a for multi-line
*/

/*
    ? Console object
    * give us access to browser or node's debugging console
    * allows the devoloper to view output from their program
*/

2 + 2; // runs but doesn't show in the console
console.log(2 + 2)// shows in the console

/*
    ? Data Types:
        Primitive
            * string
            * number
            * boolean
            * null
            * undfined
            * Not a Number (NoN)
        Reference
            * array
            * object
            * map
            * set
*/

/* 
    ? Strings
    * primitive data type representing characters
    * enclosed in '', "", or ``
    
    Examples:
*/

console.log("This is a text");
console.log('This is also a text');
console.log(`This is text using string interpolation backticks`);
// String representation of a number
console.log("2023");

// We can concatenate different string (add them together)
console.log("I'm Khale" + " and i'm 19 years old");

// Strings are indexed starting from (0)
// Index value goes between []
// ! Strings are immutable (cannot be changed)
console.log("Rubber"[5]);

/* 
    ? String Interpolation (` `)
    * a process of including space for an expression
    Syntax:
        `string ${ expresion } string`
*/

console.log(`My name is Khale and I am ${10 + 9} years old.`);
console.log("My name is Khale and I am", 10 + 9, "years old.");

/* 
    ? String Methods
    * .lenghh
    * slice()
    * .toUpperCase()
    * .toLowerCase()
*/

console.log("Kraftfahrzeughapsflichverersirscherung".length);

console.log("Coffran".toUpperCase());
console.log("Khale Coffran".slice(0,5));
console.log("Khale Coffran".indexOf("C"));

// multi-line strings - use escape charater "|n"
console.log("Khale Coffran, \n Smale Smoffran");

/* 
    ? Checking data type using typeof operator
*/
console.log(typeof "1990");
console.log(typeof 1990);

/* 
    ? Numbers
    * any interger or decimal
*/

console.log(25);
console.log(3.14);
console.log(0.2 + 0.1);
console.log(Number.MAX_SAFE_INTEGER);

/* 
    ? Booleans
    * binary value
    * either true (on) or false (off)
    * Examples of falsey values:
        * 0
        * undefined
        * null
        * NaN
        * ""
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

// Boolear() interface returns whether value is truthy or falsey
console.log(Boolean(1)); // returns true
console.log(Boolean(0)); // returns false
console.log(Boolean("")); // returns false
console.log(Boolean(null)); // returns false
console.log(Boolean(undefined)); // returns false

/* 
    ? Type Coercion
    * JS is a weakly typed programing language (duck typed)
    * doesn't require data type definition
    * comparison operatpr (==) performs type coercion before resolving expression
        * will check vaules but NOT data types
    * we can use strict equality (===) to avoid type coercion
        * will check values AND data types
    ! know what type coercion is but DO NOT USE IT!
*/

/* 
    ? Not a Number (NaN)
    * triggered when preforming operations with numbers and non-numbers
    * used when performing mathematical computations that don't make sense
*/

console.log(undefined + 5); // returns NaN

console.log(Math.sqrt(-1)); // returns NaN as sqrt of a negative number is Imaginary

/* 
    ? Null and Undefined
    * Null - placeholder for somethign
    * Undefined - lack of existence
    * 0 - ran out of stuff?
*/

/* 
    ? Operators
    * additon (+)
    * subtraction (-)
    * multiplcation (*)
    * division (/)
    * exponent(**)
    * dot (.)
    * module(%)
    * assignment (=) <-- sigle
    * comparison (==) <-- double
    * strict comparison (===) <-- triple
    * is not equal to or is strictly equal to (!= or !==)
*/

// Dot or Member Access Operator

console.log("sadaw".length);
console.log("ijfiueh".toUpperCase());

// Modular --> remainder of long division
console.log(10 /2);
console.log(10 % 2 === 0); // true --> divisible by 2
console.log(10 % 3 === 0); // false --> not divisible by 2 (remainder of 1)

// Assignment
let myName = "Khale"; // assigned value of "Khale" (str) to the variable of myName
console.log(myName);

// Comparison
console.log(myName == "Khale");

// Strict Comparison
console.log(525 === "525");

// Is Not Equal to --> flips values

console.log(2 == 2); 
console.log(2 != 2); // returns false
console.log(!true); // returns false

// Real life example
if (!myName) {
    // Checks if the inverse of this expression is true
    console.log("No name");
}
else {
    console.log("Hello " + myName);
}